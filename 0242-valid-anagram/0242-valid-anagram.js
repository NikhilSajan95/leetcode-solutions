/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj = {}
    for (let i of s){
        obj[i] = (obj[i] || 0) + 1 
    }

    for (let i of t){
       if(obj[i]){
        obj[i] = obj[i] - 1
        if(obj[i] == 0) delete obj[i]
       }else 
       return false   
    }
    // console.log(Object.keys(obj).length)
    if(Object.keys(obj).length) return false
    return true
    
};