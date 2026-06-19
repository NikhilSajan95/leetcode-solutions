/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    let ar = path.split('/')
    for(let char of ar){
        if(char == '' || char =='.') continue
        else if(char == '..') stack.pop()
        else stack.push(char)
    }
    return '/' + stack.join('/')
};