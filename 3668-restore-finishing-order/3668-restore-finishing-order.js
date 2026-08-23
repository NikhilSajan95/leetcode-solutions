/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    const set = new Set(friends);
    const ans = [];

    for (const person of order) {
        if (set.has(person)) {
            ans.push(person);
        }
    }

    return ans;
};