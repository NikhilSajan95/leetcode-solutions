/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let sumOdd = n * n
    let sumEven = n * (n + 1)
    console.log(sumOdd,sumEven)
    let min = Math.min(sumOdd,sumEven)
    let max = Math.max(sumOdd,sumEven)
    let reminder
    while(min > 0){
        reminder = Math.floor(max % min)
        max = min
        min = reminder
    }
    return max
};