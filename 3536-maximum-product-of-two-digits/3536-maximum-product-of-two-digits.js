/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let lrg = -Infinity
    let secLrg = -Infinity
    while (n>0){
        rem = n % 10
        if(rem > lrg) {
            secLrg = lrg
            lrg = rem
        }else
        if(rem > secLrg && rem < lrg) secLrg = rem
        else if (rem == lrg) secLrg = rem
        n = Math.floor(n/10)
    }
    return lrg * secLrg
};