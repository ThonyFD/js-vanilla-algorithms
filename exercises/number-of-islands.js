let rowLength = 0;
let columnLength = 0;

const numIslands = (grid) => {

    if (!grid || !grid.length) {
        return 'Invalid parameters';
    }

    let numOfIslands = 0;
    const islandsSize = [];
    rowLength = grid.length;
    columnLength = grid[0].length;

    for (let row = 0; row < rowLength; row++) {
        for (let column = 0; column < columnLength; column++) {
            if (grid[row][column] === 1) {
                islandsSize.push(0);
                console.log('------------------');
                validateNodesWithDFS(grid, row, column, islandsSize);
                ++numOfIslands;
            }
        }
    }
    return {numOfIslands, islandsSize};
};
const validateNodesWithDFS = (grid, row, column, islandsSize) => {
    if (row < 0 || column < 0 || row >= rowLength || column >= columnLength || grid[row][column] !== 1) {
        return 0;
    } else {
        islandsSize[islandsSize.length - 1] += 1;
    }
    grid[row][column] = 0; // mutating matrix
    console.log(islandsSize);


    validateNodesWithDFS(grid, row + 1, column, islandsSize); // nodo derecho
    validateNodesWithDFS(grid, row - 1, column, islandsSize); // nodo izquerdo
    validateNodesWithDFS(grid, row, column + 1, islandsSize); // nodo abajo
    validateNodesWithDFS(grid, row, column - 1, islandsSize); // nodo arriba

    // Nodos Diagonales
    validateNodesWithDFS(grid, row + 1, column - 1, islandsSize); // nodo arriba derecha
    validateNodesWithDFS(grid, row - 1, column - 1, islandsSize); // nodo arriba izquierda
    validateNodesWithDFS(grid, row + 1, column + 1, islandsSize); // nodo arriba abajo derecha
    validateNodesWithDFS(grid, row - 1, column + 1, islandsSize); // nodo arriba abajo izquierda

    return 1;
}

const grid = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 1],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1]
]
console.log(numIslands(grid));
