/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    const n = grid.length;

    for (let i = 0; i < n; i++) {
        let isChampion = true;

        for (let j = 0; j < n; j++) {
            if (i !== j && grid[i][j] === 0) {
                isChampion = false;
                break;
            }
        }

        if (isChampion) return i;
    }
};