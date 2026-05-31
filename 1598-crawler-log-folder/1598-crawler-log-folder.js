/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let map = new Map([['./',0],['../',-1]])
    let count = 0
    for(let log of logs){
        if(map.has(log)){
            count += map.get(log)
            count = Math.max(count,0)
        }else count++
    }
    return count
};