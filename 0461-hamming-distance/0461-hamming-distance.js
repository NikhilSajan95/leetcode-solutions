/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xorValue = (x ^ y)
    let binary = xorValue.toString(2)
    let count = 0 
    for (i=0; i<binary.length; i++){
        if(binary[i] == 1){
            count++
        } 
    }
    return count
};