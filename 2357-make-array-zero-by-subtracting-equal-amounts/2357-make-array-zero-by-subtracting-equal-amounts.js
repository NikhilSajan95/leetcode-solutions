/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let ans = new Set(nums) 
    return ans.has(0) ? ans.size-1 : ans.size;
};