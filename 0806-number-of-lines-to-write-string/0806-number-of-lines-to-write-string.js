/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let count = 1
    let sum = 0
    let pos
    for(let i=0; i<s.length; i++){
        if(sum <= 100){
            pos = s[i].charCodeAt(0)-97
            sum += widths[pos]
            if(sum > 100){
                count++
                sum = widths[pos]
            }
        }
    }
    return [count,sum]
};