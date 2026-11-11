/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    let maxXor = -Infinity
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            const x = nums[i];
            const y = nums[j];

            if (Math.abs(x - y) <= Math.min(x, y)) {
                maxXor = Math.max(maxXor , x ^ y);
            }
        }
    }

    return maxXor;
};