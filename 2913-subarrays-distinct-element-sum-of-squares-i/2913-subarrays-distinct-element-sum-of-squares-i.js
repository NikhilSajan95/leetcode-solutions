/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let ans = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const freq = new Array(101).fill(0);
        let distinct = 0;

        for (let j = i; j < n; j++) {
            if (freq[nums[j]] === 0) {
                distinct++;
            }

            freq[nums[j]]++;

            ans += distinct * distinct;
        }
    }
    return ans;
};