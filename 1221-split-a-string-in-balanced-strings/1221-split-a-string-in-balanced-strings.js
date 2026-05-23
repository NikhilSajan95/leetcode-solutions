/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let start = s[0]
    let count = 0
    let ans = 0
    for(let i of s){
        if(i == start) count++
        else count--
        if(count == 0)ans++
    }
    return ans   
};