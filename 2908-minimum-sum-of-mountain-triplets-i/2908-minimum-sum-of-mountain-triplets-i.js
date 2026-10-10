/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    const n = nums.length;
    const suffixMin = new Array(n);

    suffixMin[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
    }

    let leftMin = nums[0];
    let ans = Infinity;

    for (let j = 1; j < n - 1; j++) {
        if (leftMin < nums[j] && suffixMin[j + 1] < nums[j]) {
            const sum = leftMin + nums[j] + suffixMin[j + 1];
            ans = Math.min(ans, sum);
        }

        leftMin = Math.min(leftMin, nums[j]);
    }

    return ans === Infinity ? -1 : ans;
};