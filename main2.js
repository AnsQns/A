function lockInput(direction) {
    const input = document.getElementById(direction + '-input');
    if (input.value.trim() !== '') {
        input.disabled = true;
    }
}

function checkEnter(event, direction) {
    if (event.key === 'Enter') {
        lockInput(direction);
    }
}

function drag(event) {
    event.dataTransfer.setData('text', event.currentTarget.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData('text');
    const target = event.target.closest('.draggable');
    if (draggedId && target && draggedId !== target.id) {
        swapGridAreas(draggedId, target.id);
    }
}

const DIRECTIONS = ['north', 'south', 'east', 'west', 'center'];

function swapGridAreas(id1, id2) {
    const el1 = document.getElementById(id1);
    const el2 = document.getElementById(id2);
    const class1 = DIRECTIONS.find(d => el1.classList.contains(d));
    const class2 = DIRECTIONS.find(d => el2.classList.contains(d));
    if (class1 && class2 && class1 !== class2) {
        el1.classList.replace(class1, class2);
        el2.classList.replace(class2, class1);
    }
}
