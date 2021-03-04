//任务数量是一定的，处理所有任务的总时间是再怎么压缩也不能少的（又不能并发执行）
//最短时间内完成任务，那么只能考虑怎么决策执行任务使得任务与任务之间的空隙时间最少
//思路是：一次取一个任务，在n的范围内不能再次取同一个任务，那么就再去取下一个任务，
//依次进行，不能再取任务的时候，就考虑添加空隙时间了（可能不需要，任务都完成了，没任务了，就不需要了）
//我要记录这种数据特性，任务种类，该种类的数量，想到了map，处理下一个任务，不能随机取（一开始想当然这样做了）
//随机取就会导致可能出现任务数量多的任务k最后剩余最多，而又要满足n内不能重复，那么任务k就只能和间隙配合
//了，这样就多出来很多间隙，尽可能安排任务多得先完成，这样最后剩下的就越少，需要的间隙就越少
var leastInterval = function (tasks, n) {
    
    let map = new Map()//统计任务数量
    for (const task of tasks) {
        if (map.has(task)) {
            let count = map.get(task)
            count++
            map.set(task,count)
        } else { 
            map.set(task,1)
        }
    }
    //统计的任务数量情况从map中提取放入obj中，我要用到任务的类型和任务数量这2个信息
    let newArr = []
    for (const [key,value] of map.entries()) {
        let ele = {}
        ele["letter"] = key
        ele["count"] = value
        newArr.push(ele)
    }
    //根据任务的数量排序
    newArr.sort((a, b) => { 
        return a["count"] - b["count"]
    })
    //依次从newArr中拿出一个任务数量最多的任务去执行，在间隔内不停的去取，取出的元素用完把里面的count（记录还有几个任务的数量）
    //减一之后要保存一个间隔完成要放回原数组继续排序循环取
    let total = 0,num = n+1,tmpArr = []
    while (newArr.length != 0) {
        while (num != 0) {
            if (newArr.length == 0) {
                if (tmpArr.length == 0) {
                    return total
                } else { 
                    total++
                    num--
                }
            } else { 
                let obj = newArr.pop()
                let count = obj["count"]
                count --
                obj["count"] = count
                if (obj["count"] != 0) {
                    tmpArr.push(obj)
                }
                total++
                num--
            }
        }
        num = n + 1
        for (const ele of tmpArr){
            newArr.push(ele)
        }
        newArr.sort((a, b) => { 
            return a["count"] - b["count"]
        })
        tmpArr.length = 0
    }
    return total
};

var leastInterval = function (tasks, n) { 
    let map = new Map()//统计任务数量
    for (const task of tasks) {
        if (map.has(task)) {
            let count = map.get(task)
            count++
            map.set(task,count)
        } else { 
            map.set(task,1)
        }
    }
    let counts = []
    for (const count of map.values()) {
        counts.push(count)
    }
    let buckets = new Array(map.size)
}


leastInterval(["A","A","A","B","B","B"],2)
