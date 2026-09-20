/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    const n = nums.length - 1;
    const count = new Array(n + 1).fill(0);

    for (const num of nums) {
        count[num]++;
    }

    if (count[n] !== 2) {
        return false;
    }

    for (let i = 1; i < n; i++) {
        if (count[i] !== 1) {
            return false;
        }
    }

    return true;
};