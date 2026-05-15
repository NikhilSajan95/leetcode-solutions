/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const rowMap = {};
    for (const c of 'qwertyuiop') rowMap[c] = 1;
    for (const c of 'asdfghjkl') rowMap[c] = 2;
    for (const c of 'zxcvbnm') rowMap[c] = 3;

    const res = [];
    for (const word of words) {
        const low = word.toLowerCase();
        const row = rowMap[low[0]];
        if ([...low].every(c => rowMap[c] === row)) {
            res.push(word);
        }
    }
    return res;

};