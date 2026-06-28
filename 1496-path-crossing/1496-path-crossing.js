/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let obj = {'N':1,'S':-1,'E':1,'W':-1}
    let x = 0
    let y = 0
    let set = new Set()
    set.add('0,0')
    
    for(let i of path){
        if(i == 'W' || i == 'E' ){
            x = x + obj[i]
        }else{
            y = y + obj[i]
        }
        
        if(set.has(`${x},${y}`)) return true
        set.add(`${x},${y}`)
    }
    
    return false
};