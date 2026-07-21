/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity
    let diff = 0
    for(i=0; i<prices.length-1; i++){
       if(prices[i] < prices[i+1]){
        min = min < prices[i] ? min : prices[i]
        if(min < prices[i+1]){
            diff = diff > (prices[i+1] - min) ? diff : (prices[i+1] - min)
        }
       }
    }
    return diff
};