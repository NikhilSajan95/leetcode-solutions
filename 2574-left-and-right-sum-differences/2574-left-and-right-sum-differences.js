/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    leftSum = 0
    rightSum = 0
    leftArray = []
    rightArray = []
    answer = []
    n = nums.length
    for(i=0; i<n; i++){
        leftSum += nums[i-1] ?? 0
        leftArray.push(leftSum)
        rightSum += nums[n-i] ?? 0
        rightArray.unshift(rightSum)
    }
    for(i=0; i<n; i++){
        answer.push(Math.abs(leftArray[i] - rightArray[i]))
    }
    return answer
};