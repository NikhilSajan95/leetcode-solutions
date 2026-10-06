/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let maxNum = 0;
    let maxDiff = 0;
    let ans = 0;

    for (const num of nums) {

        ans = Math.max(ans, maxDiff * num);
        maxDiff = Math.max(maxDiff, maxNum - num);
        maxNum = Math.max(maxNum, num);
    }

    return ans;
};