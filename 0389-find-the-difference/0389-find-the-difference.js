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

    // OR-less timecomp.
    // let result=0
    // for(let char of s){
    //     result ^=char.charCodeAt(0)
    // }
    // for (let char of t){
    //     result ^= char.charCodeAt(0)
    // }
    //  return String.fromCharCode(result)
};
