/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function(nums) {
    const seen = [];
    const ans = [];
    let k = 0;

    for (const num of nums) {
        if (num === -1) {
            k++;

            if (k > seen.length) {
                ans.push(-1);
            } else {
                ans.push(seen[seen.length - k]);
            }
        } else {
            seen.push(num);
            k = 0;
        }
    }

    return ans;
};