/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let left = 0;
    let right = 0;
    let unknown = 0;

    for (const move of moves) {
        if (move === 'L') {
            left++;
        } else if (move === 'R') {
            right++;
        } else {
            unknown++;
        }
    }

    return Math.abs(right - left) + unknown;
};