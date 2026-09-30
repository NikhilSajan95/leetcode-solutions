/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
      const set = new Set();

    for (const [start, end] of nums) {
        for (let point = start; point <= end; point++) {
            set.add(point);
        }
    }

    return set.size;
};