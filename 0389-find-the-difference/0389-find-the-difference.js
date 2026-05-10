/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let tArray = t.split('')
    for(i = 0; i < s.length; i++){
        tArray.splice(tArray.indexOf(s[i]),1)  
    }
    return tArray.join('')
};