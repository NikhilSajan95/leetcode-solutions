/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
        const freq = new Array(26).fill(0);

    for (const ch of word) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
        if (freq[i] === 0) continue;

        freq[i]--;

        let target = 0;
        let valid = true;

        for (let j = 0; j < 26; j++) {
            if (freq[j] === 0) continue;

            if (target === 0) {
                target = freq[j];
            } else if (freq[j] !== target) {
                valid = false;
                break;
            }
        }

        if (valid) return true;

        freq[i]++;
    }

    return false;
};