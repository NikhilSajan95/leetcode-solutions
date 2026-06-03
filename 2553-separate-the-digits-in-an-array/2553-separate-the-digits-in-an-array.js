/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const result = [];

    for (let num of nums) {
        const digits = [];

        while (num > 0) {
            digits.push(num % 10);
            num = Math.floor(num / 10);
        }

        result.push(...digits.reverse());
    }

    return result;

    //  OR
    // for (const num of nums) {
    // for (const digit of String(num)) {
    //     result.push(Number(digit));
    // }
    // }
};