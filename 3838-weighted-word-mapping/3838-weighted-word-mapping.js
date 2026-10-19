/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let result = "";
    for (const word of words) {
        let sum = 0;

        for (const char of word) {
            sum += weights[char.charCodeAt(0) - 97];
        }
        const remainder = sum % 26;
        result += String.fromCharCode(122 - remainder);
    }
    return result;
};