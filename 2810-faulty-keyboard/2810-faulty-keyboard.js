/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let str = []
    for(let char of s){
        if(char !== 'i') str.push(char)
        else
        str.reverse()
    }
    return str.join('')
};