/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj = {}
    let res = ''
    let i = 0
    for(let elm of s){
        obj[elm] = (obj[elm] || 0) + 1
    }
    let ar = Object.entries(obj)
    ar.sort((a,b)=> b[1] - a[1])

    for(let [key,val] of ar){
        while(i<val){
            res += key
            i++
        }
        i = 0    
    }
    return res
};