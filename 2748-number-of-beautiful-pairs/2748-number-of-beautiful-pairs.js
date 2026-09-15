/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
    const count = new Array(10).fill(0);
    let ans = 0;

    for (const num of nums) {
        const lastDigit = num % 10;

        for (let firstDigit = 1; firstDigit <= 9; firstDigit++) {
            if (
                count[firstDigit] > 0 &&
                gcd(firstDigit, lastDigit) === 1
            ) {
                ans += count[firstDigit];
            }
        }

        let firstDigit = num;

        while (firstDigit >= 10) {
            firstDigit = Math.floor(firstDigit / 10);
        }

        count[firstDigit]++;
    }

    return ans;
};

function gcd(a, b) {
    while (b !== 0) {
        const temp = a % b;
        a = b;
        b = temp;
    }

    return a;
};