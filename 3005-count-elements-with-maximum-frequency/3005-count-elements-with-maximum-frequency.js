/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freq = {};
    let maxFreq = 0;
    let ans = 0;

    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;

        if (freq[num] > maxFreq) {
            maxFreq = freq[num];
            ans = maxFreq;
        } else if (freq[num] === maxFreq) {
            ans += maxFreq;
        }
    }

    return ans;
};