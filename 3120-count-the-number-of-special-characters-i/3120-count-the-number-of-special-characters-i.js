/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const chars = new Set(word);
    let count = 0;

    for (let i = 0; i < 26; i++) {
        const lower = String.fromCharCode(97 + i);
        const upper = String.fromCharCode(65 + i);

        if (chars.has(lower) && chars.has(upper)) {
            count++;
        }
    }

    return count;
};