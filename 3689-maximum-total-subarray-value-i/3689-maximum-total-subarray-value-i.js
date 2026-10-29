/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    let min = nums[0];
    let max = nums[0];

    for (let num of nums) {
        if (num < min) min = num;
        if (num > max) max = num;
    }

    return (max - min) * k;
};