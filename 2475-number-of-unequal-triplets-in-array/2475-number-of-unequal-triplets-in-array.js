/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let count = 0;
    for(i = 0; i < nums.length; i++){
        for(j = i+1; j < nums.length; j++){
            if(nums[i] != nums[j]){
                for(k = j+1; k < nums.length; k++){
                    if(nums[i] != nums[k] && nums[j] != nums[k]){
                        count++
                    }
                }
            }
        }
    }
    return count;    
};
//  OR
// let counts = {};
//     for (const num of nums) {
//         counts[num] = (counts[num] ?? 0) + 1;
//     }

//     let triplets = 0;
//     let left = 0;
//     let n = nums.length;

//     for (const val in counts) {
//         let mid = counts[val];
//         let right = n - left - mid;

//         triplets += left * mid * right;

//         left += mid;
//     }

//     return triplets;
