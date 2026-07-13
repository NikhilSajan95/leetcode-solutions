/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let ans = new Array(n);

    let left = 0;
    let right = n - 1;
    let index = n - 1;

    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            ans[index] = nums[left] * nums[left];
            left++;
        } else {
            ans[index] = nums[right] * nums[right];
            right--;
        }
        index--;
    }

    return ans;
};