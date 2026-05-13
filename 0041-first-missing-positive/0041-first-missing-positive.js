/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {

    let set = new Set([...nums])
    let i = 1
    while(true){
        if(!set.has(i)) return i
        i++
    }

};