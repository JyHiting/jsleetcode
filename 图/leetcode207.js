/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
//
var canFinish = function (numCourses, prerequisites) {
    let set = new Set()//不用考虑那么多可供选择的课程
    let map = new Map()//记录课程的依赖前置课程
};