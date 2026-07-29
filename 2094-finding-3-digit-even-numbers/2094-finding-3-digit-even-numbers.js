/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const freq = Array(10).fill(0);

    for (const d of digits) {
        freq[d]++;
    }

    const ans = [];

    for (let num = 100; num <= 998; num += 2) {
        const a = Math.floor(num / 100);
        const b = Math.floor((num % 100) / 10);
        const c = num % 10;

        const cnt = Array(10).fill(0);
        cnt[a]++;
        cnt[b]++;
        cnt[c]++;

        let valid = true;

        for (let d = 0; d < 10; d++) {
            if (cnt[d] > freq[d]) {
                valid = false;
                break;
            }
        }

        if (valid) ans.push(num);
    }

    return ans;
};