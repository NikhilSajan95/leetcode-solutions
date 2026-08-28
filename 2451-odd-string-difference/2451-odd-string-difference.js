/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    const map = new Map();

    for (const word of words) {
        let diff = "";

        for (let i = 1; i < word.length; i++) {
            diff += (word.charCodeAt(i) - word.charCodeAt(i - 1)) + ",";
        }

        if (!map.has(diff)) {
            map.set(diff, []);
        }

        map.get(diff).push(word);
    }

    for (const [diff, list] of map) {
        if (list.length === 1) {
            return list[0];
        }
    }
};