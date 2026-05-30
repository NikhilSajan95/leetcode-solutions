/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let sorted = nums.sort((a,b) => b-a)
    let unique = new Set(sorted)
    let arr = Array.from(unique)
    if(arr[2] !== undefined){
        return arr[2]
    }else
    return arr[0]
};