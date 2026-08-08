/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    const set = new Set(nums);
    let ans = -1;

    for (const num of nums) {
        if (num > 0 && set.has(-num)) {
            ans = Math.max(ans, num);
        }
    }

    return ans;
};