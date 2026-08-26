/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    for (let x = 1; x <= nums.length; x++) {
        let count = 0;

        for (const num of nums) {
            if (num >= x) {
                count++;
            }
        }

        if (count === x) {
            return x;
        }
    }

    return -1;
};