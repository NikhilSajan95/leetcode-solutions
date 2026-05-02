/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let count = 0
    let avg = 0
   let sum = nums.reduce((acc,val) => {
        if (val % 3 === 0 && val % 2 === 0){
            acc = acc + val
            count++
    }
    return acc
    },0);
    if(count === 0) return 0
    return Math.floor(avg = sum/count)

};