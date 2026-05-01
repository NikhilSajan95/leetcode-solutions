/**
 * @param {string[]} sentences
 * @return {number}
 */


var mostWordsFound = function(sentences) {
        let lrgCount =0
        sentences.forEach((line) => {  
        let count = line.split(" ").reduce((total,val) => ++total,0 )
        if(count >= lrgCount){
            lrgCount = count
        }
    })
    return lrgCount
};

 
