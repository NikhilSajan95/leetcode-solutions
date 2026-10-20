/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let ans = Infinity;

    for (let i = 0; i < landStartTime.length; i++) {
        for (let j = 0; j < waterStartTime.length; j++) {
            // Land ride first, then water ride
            const landFinish = landStartTime[i] + landDuration[i];
            const finish1 =
                Math.max(landFinish, waterStartTime[j]) +
                waterDuration[j];

            // Water ride first, then land ride
            const waterFinish = waterStartTime[j] + waterDuration[j];
            const finish2 =
                Math.max(waterFinish, landStartTime[i]) +
                landDuration[i];

            ans = Math.min(ans, finish1, finish2);
        }
    }

    return ans;
};