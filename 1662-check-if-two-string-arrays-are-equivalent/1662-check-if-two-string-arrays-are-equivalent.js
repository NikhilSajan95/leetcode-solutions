/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let str1 = ''
    let str2 = ''
    for(let word of word1){
        str1 += word
    }
    for(let word of word2){
        str2 += word
    }
    return str1 === str2
};