/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bin = num.toString(2)
    let bin2 = ''
    for(i=0; i<bin.length; i++){
        if(bin[i] == 0){
            bin2 += 1
        }else
        bin2 += 0
    }
    return parseInt(bin2,2)
};