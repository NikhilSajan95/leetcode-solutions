/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let int = 0
    const obj = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
    for(let i=0; i<s.length; i++){
        
        if((i+1) < s.length && obj[s[i]] < obj[s[i+1]]) {
            int += (obj[s[i+1]] - obj[s[i]])
            i++
        }else
        int += obj[s[i]]
   
    }
    return int
};