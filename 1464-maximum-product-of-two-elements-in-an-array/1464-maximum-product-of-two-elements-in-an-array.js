/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let lar = -Infinity
    let secondLar = 0
    for(i=0; i<nums.length; i++){
        if(lar<nums[i]){
            secondLar = lar
            lar = nums[i]
        }else
        secondLar = Math.max(secondLar,nums[i])
        
    }
    return ((lar-1) * (secondLar-1))
};