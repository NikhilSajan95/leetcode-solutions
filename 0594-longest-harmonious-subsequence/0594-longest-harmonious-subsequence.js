/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
     let freq = new Map();
    let maxLength = 0;

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Check consecutive numbers
    for (let [num, count] of freq) {
        if (freq.has(num + 1)) {
            maxLength = Math.max(
                maxLength,
                count + freq.get(num + 1)
            );
        }
    }

    return maxLength;
};