/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let x1 = coordinates[0][0];
    let y1 = coordinates[0][1];

    let x2 = coordinates[1][0];
    let y2 = coordinates[1][1];

    let dx = x2 - x1;
    let dy = y2 - y1;
// (x3 - x2||x1) * dy !== (y3 - y2||y1) * dx
    for (let i = 2; i < coordinates.length; i++) {
        let x3 = coordinates[i][0];
        let y3 = coordinates[i][1];

        if ((x3 - x2) * dy !== (y3 - y2) * dx) {
            return false;
        }
    }

    return true;
};