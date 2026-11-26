/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let n = code.length;
    let result = new Array(n).fill(0);

    if (k === 0) return result;

    let windowSize = Math.abs(k);
    let start = k > 0 ? 1 : n - windowSize;
    let sum = 0;

    // Calculate initial window
    for (let i = 0; i < windowSize; i++) {
        sum += code[(start + i) % n];
    }

    for (let i = 0; i < n; i++) {
        result[i] = sum;

        let outgoing = k > 0
            ? code[(i + 1) % n]
            : code[(i - windowSize + n) % n];

        let incoming = k > 0
            ? code[(i + windowSize + 1) % n]
            : code[i];

        sum = sum - outgoing + incoming;
    }

    return result;
};