/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    const set = new Set();
    let count = 0;

    for (const word of words) {
        const reverse = word[1] + word[0];

        if (set.has(reverse)) {
            count++;
        } else {
            set.add(word);
        }
    }

    return count;
};