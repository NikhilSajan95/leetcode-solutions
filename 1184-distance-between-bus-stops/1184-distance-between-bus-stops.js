/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let total = distance.reduce((sum, x) => sum + x, 0);

    if (start > destination) {
        [start, destination] = [destination, start];
    }

    let route = 0;

    for (let i = start; i < destination; i++) {
        route += distance[i];
    }

    return Math.min(route, total - route);
};