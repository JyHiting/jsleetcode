/**
 * @param {number} capacity
 */


var LRUCache = function (capacity) {
    this.max = capacity
    this.map = new Map()
    this.stack = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        //用过就是最新
        let findIdx = this.stack.indexOf(key)
        //删除原来key的位置
        this.stack.splice(findIdx, 1)
        this.stack.push(key)
        return this.map.get(key)
    } else { 
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        //用过就是最新
        let findIdx = this.stack.indexOf(key)
        //删除原来key的位置
        this.stack.splice(findIdx, 1)
        this.stack.push(key)
        this.map.set(key,value)
    } else { 
        if (this.stack.length == this.max) {
            //满了
            let key = this.stack.shift()
            this.map.delete(key)
        }
        this.stack.push(key)
        this.map.set(key,value)
    }
};

let lru = new LRUCache(3)
lru.put('jack','28')