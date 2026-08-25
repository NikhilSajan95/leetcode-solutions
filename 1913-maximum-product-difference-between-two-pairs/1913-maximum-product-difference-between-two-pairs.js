/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;

    let min1 = Infinity;
    let min2 = Infinity;

    for (const num of nums) {
        // Find two largest
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }

        // Find two smallest
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    return (max1 * max2) - (min1 * min2);
};