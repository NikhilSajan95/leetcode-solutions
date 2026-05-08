/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    // let path = paths.flat()
    // let map = new Map()
    // for (let i=0; i<path.length; i++){
    //     if(i%2 == 0) map.set(path[i],1)
    // }
    // for (let i=0; i<path.length; i++){
    //     if(i%2 !== 0){
    //         if(!map.has(path[i])) return path[i]
    //     }
    // }
    
    // OR (best)
    let startCities = new Set();
    for (let [from,}
    to] of paths) {
        startCities.add(from);
    }

    for (let [from, to] of paths) {
        if (!startCities.has(to)) {
            return to;
         }
};
