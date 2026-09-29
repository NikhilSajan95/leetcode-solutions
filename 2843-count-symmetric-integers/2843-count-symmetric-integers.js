/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let ans = 0;

    for (let num = low; num <= high; num++) {
        const s = String(num);

        if (s.length % 2 !== 0) {
            continue;
        }

        const half = s.length / 2;

        let leftSum = 0;
        let rightSum = 0;

        for (let i = 0; i < half; i++) {
            leftSum += Number(s[i]);
            rightSum += Number(s[i + half]);
        }

        if (leftSum === rightSum) {
            ans++;
        }
    }

    return ans;
};