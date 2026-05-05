/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0
    let depth = 0
    for(let para of s){
        if(para == '('){
            count++
            // console.log('count ', count)
        }else
        if(para == ')'){
            depth = Math.max(count,depth)
            count--
            // console.log( 'depth ' ,depth,count)

        }
    }
    return depth
};