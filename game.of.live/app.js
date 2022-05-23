import { liveCycle } from './helpers.gol.js';
import { initialBoard } from './initial.js';

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

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('App Loaded');
        let board = initialBoard;

        // document.querySelector('section.grid').innerHTML = createGrid(5, 5);
        document.querySelector('section.grid').innerHTML =
            createGridFromArray(board);

        setInterval(() => {
            board = liveCycle(board);
            document.querySelector('section.grid').innerHTML =
                createGridFromArray(board);
        }, 1000);
    });
})();
