//暴力求解不行，超时了
//一开始常规窗口解题思路解题发现问题，遗漏一些值，
//最后还是看题解了，对k个不同整数理解有偏差
//此题记录需要2刷
var subarraysWithKDistinct = function (A, K) {
    //计算最多k个整数的序列数量，是最多不是刚好k个
    //最多的含义是可以1个，2个，3个，...到k个，返回的值是
    //最多含有1个的序列，2个的，3个的等等最多到k，
    let calculate = (A, K) => {
        //map加
        let selfInc = (map, key) => {
            if (map.has(key)) {
                let count = map.get(key)
                count++
                map.set(key, count)
            } else {
                map.set(key, 1)
            }
        }
        //map减
        let selfDec = (map, key) => {
            if (map.has(key)) {
                let count = map.get(key)
                count--
                if (count == 0) {
                    map.delete(key)
                } else {
                    map.set(key, count)
                }
            }
        }
        let len = A.length
        //用来记录窗口里面元素的出现的次数
        let map = new Map()
        let left = 0, right = 0, total = 0
        while (right < len) {
            //right移动扩大窗口
            //遍历的元素加入map统计
            let num = A[right]
            selfInc(map, num)
            //记录好num之后就增加right
            //就是右开区间，不能跟踪right指向的值
            right++
            while (map.size > K) {
                let num = A[left]
                selfDec(map, num)
                left++
            }
            //每次移动之后计算
            //right - left差值
            //这个属于满足：包含不同整数的个数小于k的情况统计出来
            //这里是左闭右开，那么right - left就是区间序列个数
            //比如：0,1,2,3,4  right指向4但不包含4，left指向0，
            //4 - 0就是需要统计的数量
            total += right - left
        }
        return total
    }
    return calculate(A, K) - calculate(A, K - 1)
};

subarraysWithKDistinct([1, 2, 1, 2, 3], 2)