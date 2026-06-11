/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let totalSum = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let totalSubarrays = (i + 1) * (n - i);
        let oddCount = Math.floor((totalSubarrays + 1) / 2);

        totalSum += arr[i] * oddCount;
    }

    return totalSum;
};