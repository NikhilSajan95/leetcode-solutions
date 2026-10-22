/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let groups = new Map();
    let maxSize = 0;
    let result = 0;

    for (let i = 1; i <= n; i++) {
        let num = i;
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        let size = (groups.get(sum) || 0) + 1;
        groups.set(sum, size);

        if (size > maxSize) {
            maxSize = size;
            result = 1;
        } else if (size === maxSize) {
            result++;
        }
    }

    return result;
};