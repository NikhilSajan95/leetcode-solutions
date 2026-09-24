/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    let count = 0
    for(i=0; i<nums.length; i++){
        let rem
        let sum = 0
        while(nums[i] > 0){
            rem = nums[i] % 10
            sum += rem
            nums[i] = Math.floor(nums[i] / 10)
        }
        if(sum === i) return i
    }
    return -1
};