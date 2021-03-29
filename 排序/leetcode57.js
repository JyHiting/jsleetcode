/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let result = [],idx = 0

    //把没有交集的且在newInterval左边的元素加入结果集
    while (idx < intervals.length && intervals[idx][1] < newInterval[0]) {
        result.push(intervals[idx])
        idx++
    }

    //遍历有交集的
    while (idx < intervals.length && intervals[idx][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[idx][0])
        newInterval[1] = Math.max(newInterval[1], intervals[idx][1])
        idx ++
    }
    //遍历剩下的
    result.push(newInterval)
    while (idx < intervals.length) {
        result.push(intervals[idx])
        idx ++
    }
    return result
};