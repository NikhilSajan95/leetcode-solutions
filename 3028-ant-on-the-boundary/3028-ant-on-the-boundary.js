/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let position = 0;
    let count = 0;

    for (const move of nums) {
        position += move;

        if (position === 0) {
            count++;
        }
    }

    return count;
};