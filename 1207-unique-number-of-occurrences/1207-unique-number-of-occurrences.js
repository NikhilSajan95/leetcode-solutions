/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let set = new Set()
    let frq = arr.reduce((acc,val)=>{
        acc[val] = (acc[val] || 0) + 1
        return acc
    },{})
    for(let val in frq){
        if(!set.has(frq[val])) set.add(frq[val])
        else return false
    }
    return true
    
};