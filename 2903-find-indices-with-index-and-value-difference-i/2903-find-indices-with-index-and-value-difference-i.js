/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = indexDifference; i < nums.length; i++) {
        const j = i - indexDifference;
        if (nums[j] < nums[minIndex]) {
            minIndex = j;
        }
        if (nums[j] > nums[maxIndex]) {
            maxIndex = j;
        }
        if (nums[i] - nums[minIndex] >= valueDifference) {
            return [minIndex, i];
        }
        if (nums[maxIndex] - nums[i] >= valueDifference) {
            return [maxIndex, i];
        }
    }

    return [-1, -1];
};