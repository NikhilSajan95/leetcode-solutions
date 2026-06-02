/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a,b)=> b-a)
    let total = 0
    let count = 0
    for(let val of cost){
        count++
        if(count == 3) count=0
        else total += val
    }
    return total
};