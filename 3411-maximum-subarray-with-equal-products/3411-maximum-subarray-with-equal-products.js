/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
    
    let n = nums.length;
    let maxLen = 0;

    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    for (let i = 0; i < n; i++) {
        let product = 1;
        let g = 0;
        let l = 1;

        for (let j = i; j < n; j++) {
            let num = nums[j];

            product *= num;
            g = gcd(g, num);
            l = (l / gcd(l, num)) * num;

            if (product === g * l) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
};