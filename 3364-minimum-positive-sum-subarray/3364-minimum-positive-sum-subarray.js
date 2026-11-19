/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    const n = nums.length;
    let minSum = Infinity

    for (let i = 0; i < n; i++) {
        let sum = 0;

        for (let j = i; j < Math.min(i + r, n); j++) {
            sum += nums[j];

            const length = j - i + 1;

            if (length >= l && sum > 0) {
                minSum = Math.min(minSum, sum);
            }
        }
    }

    return minSum === Infinity ? -1 : minSum;
};