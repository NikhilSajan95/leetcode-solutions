/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let contains = 0
    array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    array.forEach((elm) => {
        if(!sentence.includes(elm)){
            contains = 1 
        }
    })
    return contains === 0 ? true : false
};