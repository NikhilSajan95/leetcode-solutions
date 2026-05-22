/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let missing = [];
    let set = new Set(nums)
    for(let i=1; i<=nums.length; i++){
        if(!set.has(i)) missing.push(i)
    }
    return missing


// let num = nums.sort((a, b) => a - b);
    // let j = 0;

    // for (let i = 1; i <= nums.length; i++) {
    //     if (num[j] === i) {
        
    //         while (num[j] === i) j++;
    //     } else {
    //         missing.push(i);
    //     }
    // }
    // return missing;
};