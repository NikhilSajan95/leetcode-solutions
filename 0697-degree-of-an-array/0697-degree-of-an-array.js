/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const count = new Map();
    const first = new Map();
    const last = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!first.has(num)) {
            first.set(num, i);
        }

        count.set(num, (count.get(num) || 0) + 1);
        last.set(num, i);
    }

    let degree = 0;

    for (const freq of count.values()) {
        degree = Math.max(degree, freq);
    }

    let ans = Infinity;

    for (const [num, freq] of count.entries()) {
        if (freq === degree) {
            ans = Math.min(ans, last.get(num) - first.get(num) + 1);
        }
    }

    return ans;
};