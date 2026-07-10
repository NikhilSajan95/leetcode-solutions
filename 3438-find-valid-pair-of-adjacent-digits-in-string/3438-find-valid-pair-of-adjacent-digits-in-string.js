/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
    let obj = {}
    let set
    for(let num of s){
        obj[num] = (obj[num] || 0)  + 1
    }
    for(i=0; i<s.length-1; i++){
        if(s[i] == obj[s[i]]){
            if(s[i] !== s[i+1] && s[i+1] == obj[s[i+1]]){
                return s[i]+s[i+1]
            }
        }
    }
    return ''
};