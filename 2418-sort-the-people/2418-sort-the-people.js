/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let indices = names.map((_, i) => i);

    indices.sort((a, b) => heights[b] - heights[a]);

    return indices.map(i => names[i]);

};