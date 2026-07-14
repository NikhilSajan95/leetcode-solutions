/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
//     let ans = []
// nums.forEach((val,idx,ar) =>{
//     if(ar.includes(target-val)){
//         if(idx !== ar.indexOf(target - val)) {
//         ans = [idx,ar.indexOf(target-val)]
//         }
//     }
    
// })
// return ans

// OR
const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
};