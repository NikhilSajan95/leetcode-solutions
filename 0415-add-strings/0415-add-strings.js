/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let sum = '';

    while (i >= 0 || j >= 0 || carry > 0) {
        const number1 = i >= 0 ? Number(num1[i]) : 0;
        const number2 = j >= 0 ? Number(num2[j]) : 0;

        const add = number1 + number2 + carry;
        const val = add % 10;
        carry = Math.floor(add / 10);

        sum = val + sum;

        i--;
        j--;
    }

    return sum;
};