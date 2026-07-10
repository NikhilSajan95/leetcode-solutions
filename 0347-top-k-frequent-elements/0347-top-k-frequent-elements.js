/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
//     let freq = nums.reduce((acc,val) => {
//         acc[val] = (acc[val] || 0)+1
//         return acc
//     },{})
//     let l =0
//     let ind = ''
//     let ans = []
//     for(i=0; i<k; i++){
//     for(let key in freq){
//         if(l < freq[key]){
//             l= freq[key]
//             ind =key
//         }
//     }
//     ans.push(Number(ind))
//     delete freq[ind]
//     l = 0
// }
// return ans

// BUCKET SORT

    const freq = {};

    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    const bucket = Array(nums.length + 1)
        .fill()
        .map(() => []);

    for (const key in freq) {
        bucket[freq[key]].push(Number(key));
    }

    const ans = [];

    for (let i = bucket.length - 1; i >= 0 && ans.length < k; i--) {
        ans.push(...bucket[i]);
    }

    return ans.slice(0, k);
};
