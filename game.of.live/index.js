import { liveCycle } from './helpers.gol.js';
import { initialBoard } from './initial.js';

console.clear();
console.log(initialBoard);
let board = initialBoard;

setInterval(() => {
    console.clear();
    board = liveCycle(board);
    console.log(board);
}, 1000);
