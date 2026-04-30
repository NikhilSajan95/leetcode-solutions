/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    single = 0
    double = 0
    for(i=0;i<nums.length;i++){
        if(nums[i]<10)
        single += nums[i]
        else
        double += nums[i]
    }
    return single != double   
};