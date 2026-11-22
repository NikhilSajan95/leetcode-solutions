/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countRotations = function(s, k) {
    let n = s.length;
    let total = 0;

    // Count equal adjacent pairs
    for (let i = 0; i < n; i++) {
        if (s[i] === s[(i + 1) % n]) {
            total++;
        }
    }

    // Every rotation removes one circular pair
    if (k === total - 1) {
        return total;
    }
    if (k === total) {
        return n - total;
    }

    return 0;
};