/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let frq = 0;

        for (let j = i; j < n; j++) {
            if (nums[j] === target) {
                frq++;
            }

            let length = j - i + 1;

            if (frq * 2 > length) {
                count++;
            }
        }
    }

    return count;
};