import { liveCycle } from './helpers.gol.js';
import { initialBoard } from './initial.js';

let timer;

export function createGrid(fil, col) {
    let html = '';
    for (let i = 0; i < fil * col; i++) {
        html += '<div class="cell"></div>';
    }
    return html;
}

export function createGridFromArray(array) {
    let html = '';
    array.forEach((item, i) =>
        item.forEach(
            (item, j) =>
                (html +=
                    array[i][j] === 1
                        ? `<div class="cell live" data-state=${item}></div>`
                        : `<div class="cell" data-state=${item}></div>`)
        )
    );
    return html;
}

function handlerButton(ev, board) {
    switch (ev.target.textContent) {
        case 'Start':
            timer = startLiveCycle(board);
            break;
        case 'Stop':
            stopLiveCycle(timer);
            break;

        default: // Reset
            resetLiveCycle();
            break;
    }
}

function startLiveCycle(board) {
    const id = setInterval(() => {
        board = liveCycle(board);
        document.querySelector('section.grid').innerHTML =
            createGridFromArray(board);
    }, 1000);
    return id;
}

function stopLiveCycle(timer) {
    console.log('Stop', timer);
    clearInterval(timer);
}

function resetLiveCycle() {
    document.querySelector('section.grid').innerHTML =
        createGridFromArray(initialBoard);
}

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('App Loaded');
        let board = initialBoard;

        // document.querySelector('section.grid').innerHTML = createGrid(5, 5);
        document.querySelector('section.grid').innerHTML =
            createGridFromArray(board);

        const buttons = document.querySelectorAll('section.buttons button');
        buttons.forEach((item) =>
            item.addEventListener('click', (ev) => {
                handlerButton(ev, board);
            })
        );
    });
})();
