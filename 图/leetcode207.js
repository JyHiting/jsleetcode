/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
//拓扑排序
var canFinish = function (numCourses, prerequisites) {
    //记录numCourses这写课程每一阶段的前置可能（学习完了前置课程之后依赖它的课程的条件就减少一个，减少为0即可开始学习）
    let array = new Array(numCourses).fill(0)
    let queue = []//可供现阶段直接选择学习的课程，不依赖任何课程的课程
    let map = new Map()//记录课程的依赖前置课程，某门课的前置必须课程
    prerequisites.forEach((arr, idx) => {
        let first = arr[0]
        let second = arr[1]
        if (map.has(second)) {
            let courses = map.get(second)
            courses.push(first)
            map.set(second, courses)
        } else {
            let courses = [first]
            map.set(second, courses)
        }

        array[first]++
    });

    array.forEach((item, idx) => {
        if (item == 0) {
            queue.push(idx)
        }
    });
    if (map.size == 0) {
        return true
    }
    if (queue.length == 0) {
        return false
    }

    let learnCount = 0
    while (queue.length != 0) {
        learnCount++
        let course = queue.shift()//学习这门课
        let courses = map.get(course)
        if (courses) {
            for (let i = 0; i < courses.length; i++) {
                let course = courses[i]
                array[course]--
                if (array[course] == 0) {
                    queue.push(course)
                }
            }
        }
    }
    if (learnCount === numCourses) {
        return true
    }
    return false
};

canFinish(20,
    [
        [0, 10],
        [3, 18],
        [5, 5],
        [6, 11],
        [11, 14],
        [13, 1],
        [15, 1],
        [17, 4]
    ]
)
