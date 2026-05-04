const DIRS = ['north', 'south', 'east', 'west'];
const WIND = { north: '北', south: '南', east: '東', west: '西' };

// ── Point tables (mirrors Points.js) ──────────────────────────────
const D_TBL = {
    20: ['inv', [2000,700],   [4800,1600],  [7700,2600]],
    25: ['inv', [2400,800],   [4800,1600],  [9600,3200]],
    30: [[1500,500],  [2900,1000], [5800,2000],  [11600,3900]],
    40: [[2000,700],  [3900,1300], [7700,2600],  null],
    50: [[2400,800],  [4800,1600], [9600,3200],  null],
    60: [[2900,1000], [5800,2000], [11600,3900], null],
    70: [[3400,1200], [6800,2300], null,         null]
};
const ND_TBL = {
    20: ['inv', [1300,[400,700]],  [2600,[700,1300]],  [5200,[1300,2600]]],
    25: ['inv', [1600,[400,800]],  [3200,[800,1600]],  [6400,[1600,3200]]],
    30: [[1000,[300,500]],  [2000,[500,1000]],  [3900,[1000,2000]], [7700,[2000,3900]]],
    40: [[1300,[400,700]],  [2600,[700,1300]],  [5200,[1300,2600]], null],
    50: [[1600,[400,800]],  [3200,[800,1600]],  [6400,[1600,3200]], null],
    60: [[2000,[500,1000]], [3900,[1000,2000]], [7700,[2000,3900]], null],
    70: [[2300,[600,1200]], [4500,[1200,2300]], null,               null]
};
const MANGAN = { 5:[12000,8000], 6:[18000,12000], 8:[24000,16000], 11:[36000,24000], 13:[48000,32000], 26:[96000,64000] };

// Returns { ron, tsumo: {type:'dealer',each} | {type:'ndealer',child,parent} }
// or null for invalid / impossible combos. Does NOT include honba.
function calcPoints(fan, fu, isDealer) {
    if (fan >= 5) {
        const m = MANGAN[fan];
        if (!m) return null;
        const ron = isDealer ? m[0] : m[1];
        return { ron, tsumo: isDealer
            ? { type: 'dealer',  each: m[0] / 3 }
            : { type: 'ndealer', child: m[1] / 4, parent: m[1] / 2 } };
    }
    const row = (isDealer ? D_TBL : ND_TBL)[fu];
    if (!row) return null;
    const e = row[fan - 1];
    if (e === 'inv') return null;          // impossible combo (e.g. 1番 20符)
    if (e == null) {                       // table overflow → mangan fallback
        const ron = isDealer ? 12000 : 8000;
        return { ron, tsumo: isDealer
            ? { type: 'dealer',  each: 4000 }
            : { type: 'ndealer', child: 2000, parent: 4000 } };
    }
    return { ron: e[0], tsumo: isDealer
        ? { type: 'dealer',  each: e[1] }
        : { type: 'ndealer', child: e[1][0], parent: e[1][1] } };
}

// ── State ──────────────────────────────────────────────────────────
const pts = { north: 25000, south: 25000, east: 25000, west: 25000 };
let dealer = 'east';
let honba  = 0;
const settle = { winner: null, method: null, loser: null, fan: null, fu: null };

// ── Drag & Drop ────────────────────────────────────────────────────
function lockInput(dir) {
    const inp = document.getElementById(dir + '-input');
    if (inp.value.trim() !== '') { inp.disabled = true; syncName(dir); }
}
function checkEnter(event, dir) { if (event.key === 'Enter') lockInput(dir); }

function drag(event) {
    event.currentTarget.classList.add('dragging');
    event.dataTransfer.setData('text', event.currentTarget.id);
}
function allowDrop(event) { event.preventDefault(); }
function enter(event) {
    if (!event.currentTarget.contains(event.relatedTarget))
        event.currentTarget.classList.add('drag-over');
}
function leave(event) {
    if (!event.currentTarget.contains(event.relatedTarget))
        event.currentTarget.classList.remove('drag-over');
}
function drop(event) {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData('text');
    const target = event.target.closest('.draggable');
    document.querySelectorAll('.draggable').forEach(el => el.classList.remove('dragging', 'drag-over'));
    if (draggedId && target && draggedId !== target.id) swapGridAreas(draggedId, target.id);
}
function swapGridAreas(id1, id2) {
    const el1 = document.getElementById(id1), el2 = document.getElementById(id2);
    const c1 = DIRS.find(d => el1.classList.contains(d));
    const c2 = DIRS.find(d => el2.classList.contains(d));
    if (c1 && c2 && c1 !== c2) { el1.classList.replace(c1, c2); el2.classList.replace(c2, c1); }
}

// ── Points display ─────────────────────────────────────────────────
function fmt(n) { return n.toLocaleString(); }
function renderPts(dir) { const el = document.getElementById(dir + '-pts'); if (el) el.textContent = fmt(pts[dir]); }

function editPts(dir) {
    document.getElementById(dir + '-pts-display').innerHTML =
        `<input type="number" class="pts-edit-input" id="${dir}-pts-input" value="${pts[dir]}"
            onblur="savePts('${dir}')" onkeydown="if(event.key==='Enter')savePts('${dir}')">`;
    const inp = document.getElementById(dir + '-pts-input');
    inp.select(); inp.focus();
}
function savePts(dir) {
    const inp = document.getElementById(dir + '-pts-input');
    if (!inp) return;
    const v = parseInt(inp.value, 10);
    if (!isNaN(v)) pts[dir] = v;
    document.getElementById(dir + '-pts-display').innerHTML = `<span id="${dir}-pts">${fmt(pts[dir])}</span>`;
}

function flashDelta(dir, delta) {
    const el = document.getElementById(dir + '-pts-delta');
    el.textContent = (delta > 0 ? '+' : '') + fmt(delta);
    el.className = 'pts-delta ' + (delta > 0 ? 'positive' : 'negative');
    void el.offsetWidth;
    el.classList.add('flash');
}

// ── Honba ──────────────────────────────────────────────────────────
function changeHonba(delta) {
    honba = Math.max(0, honba + delta);
    document.getElementById('honba-val').textContent = honba;
    updatePreview();
}

// ── Dealer ─────────────────────────────────────────────────────────
function setDealer(dir) {
    dealer = dir;
    DIRS.forEach(d => document.getElementById(d + '-dealer-tag').classList.toggle('active', d === dir));
    updatePreview();
}

// ── Settlement ─────────────────────────────────────────────────────
function syncName(dir) {
    const name = document.getElementById(dir + '-input').value.trim();
    const el = document.getElementById('sn-' + dir);
    if (el) el.textContent = name || '—';
}

function selectWinner(dir) {
    settle.winner = dir;
    settle.loser = null;
    document.querySelectorAll('#winner-row .settle-player-btn').forEach(b =>
        b.classList.toggle('selected', b.dataset.dir === dir));
    if (settle.method === 'ron') buildLoserBtns();
    updatePreview();
}

function selectLoser(dir) {
    settle.loser = dir;
    buildLoserBtns();
}

function buildLoserBtns() {
    const row = document.getElementById('loser-row');
    row.innerHTML = '';
    DIRS.filter(d => d !== settle.winner).forEach(dir => {
        const name = document.getElementById(dir + '-input').value.trim();
        const btn = document.createElement('button');
        btn.className = 'opt settle-player-btn' + (settle.loser === dir ? ' selected' : '');
        btn.dataset.dir = dir;
        btn.innerHTML = `<span class="sw">${WIND[dir]}</span><span class="sn">${name || '—'}</span>`;
        btn.onclick = () => selectLoser(dir);
        row.appendChild(btn);
    });
}

function setMethod(method) {
    settle.method = method;
    settle.loser = null;
    document.getElementById('btn-ron').classList.toggle('selected',   method === 'ron');
    document.getElementById('btn-tsumo').classList.toggle('selected', method === 'tsumo');
    document.getElementById('ron-section').classList.toggle('hidden', method !== 'ron');
    if (method === 'ron') buildLoserBtns();
    updatePreview();
}

function setFan(v) {
    settle.fan = v;
    document.querySelectorAll('[data-fan]').forEach(b =>
        b.classList.toggle('selected', +b.dataset.fan === v));
    // hide fu for mangan+; also clear an invalid fu selection
    const needFu = v < 5;
    document.getElementById('settle-fu-card').classList.toggle('hidden', !needFu);
    // disable 20/25符 for 1番 (impossible combo)
    document.querySelectorAll('[data-fu]').forEach(b => {
        const disabled = v === 1 && (+b.dataset.fu === 20 || +b.dataset.fu === 25);
        b.disabled = disabled;
        b.classList.toggle('opt-disabled', disabled);
        if (disabled && settle.fu === +b.dataset.fu) {
            settle.fu = null;
            b.classList.remove('selected');
        }
    });
    if (!needFu) settle.fu = null;
    updatePreview();
}

function setFu(v) {
    settle.fu = v;
    document.querySelectorAll('[data-fu]').forEach(b =>
        b.classList.toggle('selected', +b.dataset.fu === v));
    updatePreview();
}

// ── Point preview ──────────────────────────────────────────────────
function ptLine(label, base, hEach) {
    const total = base + hEach;
    if (hEach > 0) {
        return `<div class="pt-row">
            <span class="pt-label">${label}</span>
            <span class="pt-calc">${fmt(base)}<span class="pt-plus"> + ${fmt(hEach)} 本場</span> = </span>
            <span class="pt-val">${fmt(total)}</span><span class="pt-unit"> 點</span>
        </div>`;
    }
    return `<div class="pt-row">
        <span class="pt-label">${label}</span>
        <span class="pt-val">${fmt(total)}</span><span class="pt-unit"> 點</span>
    </div>`;
}

function updatePreview() {
    const box = document.getElementById('pt-preview');
    if (!settle.winner || !settle.method || settle.fan === null ||
        (settle.fan < 5 && settle.fu === null)) {
        box.innerHTML = ''; return;
    }
    const isDealer = settle.winner === dealer;
    const result = calcPoints(settle.fan, settle.fu, isDealer);
    if (!result) {
        box.innerHTML = `<span class="pt-invalid">此組合不合法</span>`; return;
    }
    const hB = honba * 300, hE = honba * 100;
    let html = '';
    if (settle.method === 'ron') {
        html = ptLine('榮和', result.ron, hB);
    } else if (result.tsumo.type === 'dealer') {
        html = ptLine('自摸　各家付', result.tsumo.each, hE);
    } else {
        html = ptLine('自摸　子家各付', result.tsumo.child,  hE)
             + ptLine('　　　親家付',   result.tsumo.parent, hE);
    }
    box.innerHTML = html;
}

// ── Confirm ────────────────────────────────────────────────────────
function confirmSettle() {
    if (!settle.winner || !settle.method) { showMsg('請選擇贏家與和牌方式', 'error'); return; }
    if (settle.fan === null)              { showMsg('請選擇番數', 'error'); return; }
    if (settle.fan < 5 && settle.fu === null) { showMsg('請選擇符數', 'error'); return; }

    const isDealer = settle.winner === dealer;
    const result = calcPoints(settle.fan, settle.fu, isDealer);
    if (!result) { showMsg('此組合不合法', 'error'); return; }

    if (settle.method === 'ron' && !settle.loser) { showMsg('請選擇放炮者', 'error'); return; }

    const hB = honba * 300, hE = honba * 100;
    const deltas = { north: 0, south: 0, east: 0, west: 0 };

    if (settle.method === 'ron') {
        const total = result.ron + hB;
        deltas[settle.winner] += total;
        deltas[settle.loser]  -= total;
    } else if (result.tsumo.type === 'dealer') {
        const each = result.tsumo.each + hE;
        DIRS.filter(d => d !== settle.winner).forEach(d => {
            deltas[d] -= each; deltas[settle.winner] += each;
        });
    } else {
        DIRS.filter(d => d !== settle.winner).forEach(d => {
            const pay = (d === dealer ? result.tsumo.parent : result.tsumo.child) + hE;
            deltas[d] -= pay; deltas[settle.winner] += pay;
        });
    }

    DIRS.forEach(d => { pts[d] += deltas[d]; renderPts(d); if (deltas[d]) flashDelta(d, deltas[d]); });
    resetSettle();
    showMsg('結算完成', 'success');
}

function resetSettle() {
    settle.winner = settle.method = settle.loser = settle.fan = settle.fu = null;
    document.querySelectorAll('.settle-player-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById('btn-ron').classList.remove('selected');
    document.getElementById('btn-tsumo').classList.remove('selected');
    document.getElementById('ron-section').classList.add('hidden');
    document.querySelectorAll('[data-fan],[data-fu]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-fu]').forEach(b => { b.disabled = false; b.classList.remove('opt-disabled'); });
    document.getElementById('settle-fu-card').classList.remove('hidden');
    document.getElementById('pt-preview').innerHTML = '';
}

function showMsg(msg, type) {
    const el = document.getElementById('settle-msg');
    el.textContent = msg; el.className = 'settle-msg ' + type;
    clearTimeout(el._t);
    el._t = setTimeout(() => { el.textContent = ''; el.className = 'settle-msg'; }, 2500);
}

document.addEventListener('DOMContentLoaded', () => setDealer('east'));
