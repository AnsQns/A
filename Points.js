var DEALER_TABLE = {
    20: ["invalid", [2000,700],  [4800,1600],  [7700,2600]],
    25: ["invalid", [2400,800],  [4800,1600],  [9600,3200]],
    30: [[1500,500], [2900,1000], [5800,2000],  [11600,3900]],
    40: [[2000,700], [3900,1300], [7700,2600],  null],
    50: [[2400,800], [4800,1600], [9600,3200],  null],
    60: [[2900,1000],[5800,2000], [11600,3900], null],
    70: [[3400,1200],[6800,2300], null,         null]
};

var NON_DEALER_TABLE = {
    20: ["invalid", [1300,[400,700]],  [2600,[700,1300]],  [5200,[1300,2600]]],
    25: ["invalid", [1600,[400,800]],  [3200,[800,1600]],  [6400,[1600,3200]]],
    30: [[1000,[300,500]],  [2000,[500,1000]],  [3900,[1000,2000]], [7700,[2000,3900]]],
    40: [[1300,[400,700]],  [2600,[700,1300]],  [5200,[1300,2600]], null],
    50: [[1600,[400,800]],  [3200,[800,1600]],  [6400,[1600,3200]], null],
    60: [[2000,[500,1000]], [3900,[1000,2000]], [7700,[2000,3900]], null],
    70: [[2300,[600,1200]], [4500,[1200,2300]], null,               null]
};

var MANGAN = {
    5:  [12000, 8000],
    6:  [18000, 12000],
    8:  [24000, 16000],
    11: [36000, 24000],
    13: [48000, 32000],
    26: [96000, 64000]
};

function calculate(isDealer) {
    var fan = parseInt(document.getElementById('fanNumber').value);
    var fu  = parseInt(document.getElementById('fuNumber').value);
    var r1  = document.getElementById('result1');
    var r2  = document.getElementById('result2');

    if (fan >= 5) {
        var m   = MANGAN[fan];
        var ron = isDealer ? m[0] : m[1];
        r1.textContent = '榮和：' + ron + '點';
        r2.textContent = isDealer
            ? '自摸：' + (ron / 3) + ' ALL'
            : '自摸：子' + (ron / 4) + '點，親' + (ron / 2) + '點';
        return;
    }

    var table = isDealer ? DEALER_TABLE : NON_DEALER_TABLE;
    var row   = table[fu];
    var entry = row ? row[fan - 1] : null;

    if (entry === 'invalid') {
        r1.textContent = '重新選擇';
        r2.textContent = '重新選擇';
        return;
    }

    if (!entry) {
        var manRon = isDealer ? 12000 : 8000;
        r1.textContent = '榮和：' + manRon + '點';
        r2.textContent = isDealer ? '自摸：4000 ALL' : '自摸：子2000點，親4000點';
        return;
    }

    var ron2  = entry[0];
    var tsumo = entry[1];
    r1.textContent = '榮和：' + ron2 + '點';
    r2.textContent = isDealer
        ? '自摸：' + tsumo + ' ALL'
        : '自摸：子' + tsumo[0] + '點，親' + tsumo[1] + '點';
}
