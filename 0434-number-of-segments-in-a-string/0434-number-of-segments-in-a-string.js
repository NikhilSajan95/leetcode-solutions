/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count = 0
    let ans = s.split(' ')
    for(let char of ans){
        if(char.trim()){
            count++
        }
    }
    return count
};