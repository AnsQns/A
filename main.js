function BasicGame() {
    window.location.href = 'MJ2.html';
}

function PlayerNames() {
    const names = [];
    for (let i = 0; i < 4; i++) {
        names.push(document.getElementById('PlayerName' + i).value);
    }
    return names;
}

function selectOption(option) {
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.toggle('selected', opt.textContent === option);
    });
    calculate(option === '親家');
}

document.getElementById('button')?.addEventListener('click', BasicGame);
document.getElementById('button1')?.addEventListener('click', PlayerNames);
