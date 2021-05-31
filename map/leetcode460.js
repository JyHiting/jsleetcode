
var LFUCache = function (capacity) {
    //记录最大容量
    this.capacity = capacity
    //记录缓存数据
    this.lists = []
    //标识一个最近的时间戳
    //记录最近一次操作的时间
    this.latesttime = null
};


LFUCache.prototype.get = function (key) {
    let obj = this.findObj(key)
    if (obj) {
        obj.count++
        //更新时间
        this.latesttime++
        obj.time = this.latesttime
        this.sortLists()
        return obj.value
    } else {
        return -1
    }
};

LFUCache.prototype.put = function (key, value) {

    if (this.capacity == 0) {
        //do nothing
        return
    }
    let obj = this.findObj(key)
    if (obj) {
        //update value
        obj.count++
        this.latesttime++
        obj.time = this.latesttime
        obj.value = value
    } else {
        if (this.lists.length == this.capacity) {
            this.lists.shift()
        }
        //insert value
        let obj = {}
        obj.key = key
        obj.count = 1
        if (this.latesttime == null) {
            this.latesttime = 10086
        } else {
            this.latesttime++
        }
        obj.time = this.latesttime
        obj.value = value
        this.lists.push(obj)
    }
    //sort value
    this.sortLists()
};

LFUCache.prototype.findObj = function (key) {
    for (let i = 0; i < this.lists.length; i++) {
        let obj = this.lists[i]
        if (obj.key === key) {
            return obj
        }
    }
    return null
}

LFUCache.prototype.sortLists = function () {
    this.lists.sort((a, b) => {
        if (a.count - b.count == 0) {
            return a.time - b.time
        }
        return a.count - b.count
    })
}

// var obj = new LFUCache(2)
// obj.put(1, 1)
// obj.put(2, 2)
// obj.get(1)
// obj.put(3, 3)
// obj.get(2)
// obj.get(3)
// obj.put(4, 4)
// console.log(obj.get(1));
// obj.get(3)
// obj.get(4)

var obj = new LFUCache(0)
obj.put(0, 0)
obj.get(0)



