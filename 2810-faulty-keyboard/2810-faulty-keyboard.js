/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let str = ''
    for(let char of s){
        if(char === 'i') str = str.split('').reverse().join('')
        else
        str += char
    }
    return str
};