var numMovesStonesII = function (stones) {
    let result = [0, 0]
    //整体序列中有多少个空
    let nums1 = stones[stones.length - 1] - stones[0] + 1
    //有多少个未被占用的空
    let nums2 = nums1 - stones.length
    //要想移动最多（下棋移动次数最多）那么首先下第一个棋子
    //是关键，决定后面我一次占一个坑可占的坑的数量
    //可占用坑越多移动次数越多
    let nums3 = Math.min(stones[stones.length - 1] - stones[stones.length - 2] - 1, stones[1] - stones[2] - 1)
    //怎么第一步留空最多的序列，后面就保证移动最多？
    //可用空就那么多，每次移动一个，能完成游戏的一次也是固定的
    let max = nums2 - nums3
    result[1] = max
    let min = Number.MAX_VALUE
    for (let i = stones[0]; i <= stones[stones.length - 1]; i++) {
        let j = i + stones.length - 1
        if (j <= stones[stones.length - 1]) {

        }
    }
    return result
};

//4
//排序再求中位数，最容易想到，可能也是最low的
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = []
    let i = 0, j = 0
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) {
            arr.push(nums2[j])
            j++
        } else {
            arr.push(nums1[i])
            i++
        }
    }
    while (i < nums1.length) {
        arr.push(nums1[i])
        i++
    }
    while (j < nums2.length) {
        arr.push(nums2[j])
        j++
    }
    if (arr.length % 2 == 0) {
        //偶数
        return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
    } else {
        //奇数
        return arr[(arr.length - 1) / 2]
    }
};

// findMedianSortedArrays([1, 2], [3, 4])


//560
//暴力解法超时
// var subarraySum = function (nums, k) {
//     let table = []
//     for (let i = 0; i < nums.length; i++) {
//         if (i == 0) {
//             table[i] = nums[i]
//         } else {
//             table[i] = table[i - 1] + nums[i]
//         }
//     }
//     let result = 0
//     //i表示在nums中的第几个元素，不是下标
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j <= i; j++) {
//             if (j == 0) {
//                 if (table[i] == k) {
//                     result++
//                 }
//             } else {
//                 if (table[i] - table[j - 1] == k) {
//                     result++
//                 }
//             }
//         }
//     }
//     return result
// };


var subarraySum = function (nums, k) {
    let result = 0, sum = 0
    let map = new Map()
    map.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        //累加当前num
        sum += nums[i]
        //到元素i的总和减去增量k即为子串，字串存在就有一个题解
        //[1.2.3..]+k = [1.2.3...7.8.9]
        if (map.has(sum - k)) {
            //map中已经记录了以1,2,3...i-1结尾的sum，那么我当前以i结尾的
            //sum减去k如果存在map中那么一定就能找到符合题意的连续数组
            //一开始思路用数组保存各个累加和，但是找sum减去k的累加和是否存在
            //就要通过遍历，那么用map这种结构保存可减少这部分遍历
            //命中一个值
            result += map.get(sum - k)
        }
        //当前走到i的时候累加i的值并把值放入map中记录
        //其出现的次数
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1)
        } else {
            map.set(sum, 1)
        }
    }
    return result
};


subarraySum([1, -1, 0], 0)