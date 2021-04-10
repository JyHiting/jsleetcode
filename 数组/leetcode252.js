/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
     
    //按起始时间进行升序排序
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    let idx = 1
    while (idx < intervals.length) {
        //判断是否有交集
        if (intervals[idx][0] < intervals[idx - 1][1]) {
            return false
        }
        idx ++
    }
    return true
};

canAttendMeetings([[13,15],[1,13]])