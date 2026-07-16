/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const athletes = score.map((value, index) => [value, index]);

    athletes.sort((a, b) => b[0] - a[0]);

    const answer = new Array(score.length);

    for (let i = 0; i < athletes.length; i++) {
        const originalIndex = athletes[i][1];

        if (i === 0) {
            answer[originalIndex] = "Gold Medal";
        } else if (i === 1) {
            answer[originalIndex] = "Silver Medal";
        } else if (i === 2) {
            answer[originalIndex] = "Bronze Medal";
        } else {
            answer[originalIndex] = String(i + 1);
        }
    }

    return answer;
};