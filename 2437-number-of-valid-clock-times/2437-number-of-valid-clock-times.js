/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    let ans = 1;

    //  hour digit
    if (time[0] === '?' && time[1] === '?') {
        ans *= 24;
    } else if (time[0] === '?') {
        ans *= time[1] <= '3' ? 3 : 2;
    } else if (time[1] === '?') {
        ans *= time[0] === '2' ? 4 : 10;
    }

    // First minute digit
    if (time[3] === '?') {
        ans *= 6;
    }

    // Second minute digit
    if (time[4] === '?') {
        ans *= 10;
    }

    return ans;
};