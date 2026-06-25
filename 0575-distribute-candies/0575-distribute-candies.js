/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let n = candyType.length / 2
    let set = new Set (candyType)
    return Math.min(n,set.size)
};