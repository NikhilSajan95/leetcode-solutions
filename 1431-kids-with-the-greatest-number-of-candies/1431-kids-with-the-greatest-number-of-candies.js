/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandy = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= maxCandy);

    // OR
    // let result = [];

    // for (let candy of candies) {
    //     result.push(candy + extraCandies >= maxCandy);
    // }

    // return result;
};