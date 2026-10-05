/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const seen = new Set();
    let count = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] <= k && !seen.has(nums[i])) {
            seen.add(nums[i]);
            count++;
        }

        if (count === k) {
            return nums.length - i;
        }
    }

    return -1;
};