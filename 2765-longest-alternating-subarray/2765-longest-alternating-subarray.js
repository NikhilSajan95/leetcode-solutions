/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function(nums) {
    let len = 0;
    let ans = -1;

    for (let i = 1; i < nums.length; i++) {

        if (len === 0) {
            if (nums[i] === nums[i - 1] + 1) {
                len = 2;
            }
        } 
        else {
            const expected = len % 2 === 0 ? -1 : 1;

            if (nums[i] - nums[i - 1] === expected) {
                len++;
            } 
            else {
                if (nums[i] === nums[i - 1] + 1) {
                    len = 2;
                } else {
                    len = 0;
                }
            }
        }

        if (len >= 2) {
            ans = Math.max(ans, len);
        }
    }

    return ans;
};