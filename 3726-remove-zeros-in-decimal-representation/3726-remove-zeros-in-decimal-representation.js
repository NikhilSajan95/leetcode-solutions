/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    let str = n.toString();
    let ans = "";

    for (let ch of str) {
        if (ch !== '0') {
            ans += ch;
        }
    }

    return Number(ans);
};