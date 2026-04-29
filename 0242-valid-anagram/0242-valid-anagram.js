/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false    
    let obj = {}
    for (let i of s) {
        obj[i] = (obj[i] || 0) + 1
    }
    for (let i of t) {
        if(!obj[i]) return false
        obj[i]--
    }
    return true
};
//  OR
// if (s.length != t.length)
//         return false;

//     console.log('a'.charCodeAt(0))
//     var array = new Array(26).fill(0);
//     for (let i = 0; i < s.length; i++) {
//         array[t[i].charCodeAt(0) - 97] ++;
//         array[s[i].charCodeAt(0) - 97] --;
//     }

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== 0) return false;
//     }

//     return true;
