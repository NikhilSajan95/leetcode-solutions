/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let res = title.split(' ').map(val =>{
        if(val.length < 3) return val.toLowerCase()
        else
        return val.charAt(0).toUpperCase().concat(val.slice(1).toLowerCase())
        
    })
    return res.join(' ')
};