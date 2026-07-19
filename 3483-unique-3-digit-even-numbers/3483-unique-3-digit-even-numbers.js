/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    const freq = new Array(10).fill(0);

    for (const d of digits) {
        freq[d]++;
    }

    let count = 0;

    for (let num = 100; num <= 998; num += 2) {
        const a = Math.floor(num / 100);
        const b = Math.floor((num % 100) / 10);
        const c = num % 10;

        const need = new Array(10).fill(0);
        need[a]++;
        need[b]++;
        need[c]++;

        let valid = true;

        for (let d = 0; d < 10; d++) {
            if (need[d] > freq[d]) {
                valid = false;
                break;
            }
        }

        if (valid) count++;
    }

    return count;
};