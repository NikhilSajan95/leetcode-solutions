/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let idx = word.indexOf(ch);

    if (idx === -1) return word;

    let arr = word.split("");

    let left = 0;
    let right = idx;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join("");
};