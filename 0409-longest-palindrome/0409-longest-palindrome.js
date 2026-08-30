/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let oddHighest = 0
    let sum = 0
    let flag = false

    let frq = s.split('').reduce((acc,val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
    },{})

    for( let key in frq){
        if(frq[key] % 2 === 0) sum += frq[key]
        else {
            sum += (frq[key] - 1)
            flag = true
        }  
    }
    return flag ? sum+1 : sum
};