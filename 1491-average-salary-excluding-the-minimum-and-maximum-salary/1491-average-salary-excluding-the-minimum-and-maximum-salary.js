/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let count = 0
    const avg = salary.sort((a,b) => a-b).reduce((acc,val,index,arr) =>{
        if(index !== 0 && index !== arr.length-1 ){
            count++
            return acc += val
        }else
        return acc
        },0)
        return avg/count
};