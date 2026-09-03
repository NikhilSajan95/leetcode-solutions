/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let minOdd = Infinity;

    // Find the smallest odd number
    for (const num of nums1) {
        if (num % 2 === 1) {
            minOdd = Math.min(minOdd, num);
        }
    }

    // If there is no odd number,all numbers are already even
    if (minOdd === Infinity) {
        return true;
    }

    // An even number smaller than minOdd makes it impossible
    for (const num of nums1) {
        if (num % 2 === 0 && num < minOdd) {
            return false;
        }
    }

    return true;
};