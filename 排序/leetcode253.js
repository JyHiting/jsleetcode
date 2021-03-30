/**
 * @param {number[][]} intervals
 * @return {number}
 */

//优先队列：最小堆
//要记录会议室正在开会的最小结束时间，下个会议开始的时间小于这个记录的最小时间的话
//此时这个会议室没法复用，会议没结束呢，要新开会议室，如果大于这个记录的最小时间
//那么说明此时要开的会议可以使用这个会议室
var minMeetingRooms = function (intervals) {
      
    let buildHeap = (endTimes) => {
        const len = endTimes.length
        for (let i = Math.floor(len/2) - 1; i >= 0; i--) {
            const left = i * 2 + 1, right = i * 2 + 2
            if (right > len - 1) {
                //最后一个非叶子节点无右儿子
                if (endTimes[i] > endTimes[left]) {
                    let tmp = endTimes[i]
                    endTimes[i] = endTimes[left]
                    endTimes[left] = tmp
                }
            } else {
                let min = left
                if (endTimes[left] > endTimes[right]) {
                    min = right
                }
                if (endTimes[i] > endTimes[min]) {
                    //开始交换
                    let tmp = endTimes[i]
                    endTimes[i] = endTimes[min]
                    endTimes[min] = tmp
                }
            }
        }
    }

    //按开始时间排序
    intervals.sort((a,b) => {
        return a[0] - b[0]
    })
    let minHeap = []
    for (let i = 0; i < intervals.length; i++) {
        if (minHeap.length == 0) {
            minHeap.push(intervals[i][1])
        } else {
            //会议结束时间
            let min = minHeap[0]
            if (min <= intervals[i][0]) {
                //此时有腾出来的会议室
                minHeap.shift()
                minHeap.push(intervals[i][1])
            } else {
                minHeap.push(intervals[i][1])
            }
        }
        buildHeap(minHeap)
    }
    return minHeap.length
};

minMeetingRooms([[8,14],[12,13],[6,13],[1,9]])