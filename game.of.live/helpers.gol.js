/* eslint-disable no-unused-vars */
export function findValidNeighbors(fil = 0, col = 0, array = []) {
    return [
        [fil - 1, col - 1],
        [fil - 1, col],
        [fil - 1, col + 1],
        [fil, col - 1],
        [fil, col + 1],
        [fil + 1, col - 1],
        [fil + 1, col],
        [fil + 1, col + 1],
    ].filter(
        (item) =>
            item[0] >= 0 &&
            item[1] >= 0 &&
            item[0] <= array.length - 1 &&
            item[1] <= array.length - 1
    );
}

export function countAliveNeighbors(fil = 0, col = 0, array = []) {
    return findValidNeighbors(fil, col, array)
        .map((item) => array[item[0]][item[1]])
        .reduce((a, b) => a + b);
}

export function willBeAlive(fil = 0, col = 0, array = []) {
    const countValidCells = countAliveNeighbors(fil, col, array);
    let result = countValidCells >= 3 ? 1 : 0;
    if (array[fil][col] === 1) {
        // starting alive
        result = countValidCells > 2 && countValidCells <= 3 ? 1 : 0;
    }
    return result;
}

export function liveCycle(array) {
    return array.map((item, i) =>
        item.map((item, j) => willBeAlive(i, j, array))
    );
}
