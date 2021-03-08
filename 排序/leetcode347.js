//桶排序
// var topKFrequent = function (nums, k) {
//     let map = new Map()
//     //遍历记录数字出现频率
//     nums.forEach((item) => {
//         if (map.has(item)) {
//             let count = map.get(item)
//             count++
//             map.set(item, count)
//         } else {
//             map.set(item, 1)
//         }
//     });
//     //动态桶，下标为数字出现频率
//     //下标不一定连续比如下标1，3，5，6有值
//     //2，4，7等为undefined
//     let buckets = []
//     map.forEach((value, key) => {
//         //value为出现频率
//         let arr = buckets[value]
//         if (arr == undefined) {
//             arr = []
//             buckets[value] = arr
//         }
//         if (!arr.includes(key)) {
//             arr.push(key)
//         }
//     });
//     //倒叙遍历桶
//     let result = []
//     for (let i = buckets.length - 1; i > 0; i--) {
//         const arr = buckets[i];
//         if (arr != undefined) {
//             //把对应下标里的元素（如果有的话全部加入结果数组）
//             result.push(...arr)
//             k -= arr.length
//         }
//         if (k == 0) {
//             break
//         }
//     }
//     return result
// };


var topKFrequent = function (nums, k) {
    let map = new Map()
    //统计数字出现频率
    nums.forEach((item) => {
        if (map.has(item)) {
            let count = map.get(item)
            count++
            map.set(item, count)
        } else {
            map.set(item, 1)
        }
    });
    let newArr = []
    map.forEach((value, key) => {
        let obj = {}
        obj.key = key
        obj.value = value
        newArr.push(obj)
    });
    let buildheap = (n, end) => {
        //从最后一个非叶子节点开始
        //最后一个非叶子节点下标为nums.length/2 -1
        let length = end + 1
        for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
            //节点i的左孩子右孩子在数组中下标位置
            const left = i * 2 + 1, right = i * 2 + 2
            //right有可能没有，只有左的情况，要判断
            if (right > (length - 1)) {
                //此时没有右孩子
                if (n[i].value < n[left].value) {
                    //交换
                    let tmp = n[i]
                    n[i] = n[left]
                    n[left] = tmp
                }
            } else {
                //此时左右孩子都有
                let max = left
                if (n[left].value < n[right].value) {
                    max = right
                }
                if (n[i].value < n[max].value) {
                    //交换
                    let tmp = n[i]
                    n[i] = n[max]
                    n[max] = tmp
                }
            }
        }
    }
    let end = newArr.length - 1
    let result = []
    while (k != 0) {
        buildheap(newArr, end)
        result.push(newArr[0].key)
        //把顶交换到尾去
        let tmp = newArr[0]
        newArr[0] = newArr[end]
        newArr[end] = tmp
        k--
        end--
    }
    return result
};

topKFrequent([1, 1, 1, 2, 2, 3], 2)