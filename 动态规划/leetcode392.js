//此题的第一直觉就是双指针，遍历s，t串
//根据双指针遍历推演的结果，其实很容易发现
//每一次遍历的结果都是下面dptable中的结果
var isSubsequence = function (s, t) {
    //规避特殊情况
    if (s.length == 0) {
        return true
    }
    if (t.length == 0) {
        return false
    }
    //下面开辟数组+1的目的是为了方便处理，有些状态方程的一些边界情况的处理
    //通过dptable多开辟一些空间可以规避一些逻辑判断
    //dptable的含义：字符串s,0...i,是否是字符串t,0...j的字串
    //可状态压缩
    let dptable = new Array(s.length + 1)
    for (let i = 0; i < dptable.length; i++) {
        let arr = new Array(t.length + 1).fill(0)
        dptable[i] = arr
    }
    for (let i = 0; i < s.length + 1; i++) {
        for (let j = 0; j < t.length + 1; j++) {
            if (i == 0) {
                dptable[i][j] = 1
            } else {
                if (j == 0) {
                    dptable[i][j] = 0
                } else {
                    //什么都不管先写出我想的状态方程（可能对，可能不对，发现很难走通了就赶紧切换思路）
                    //不能顺着第一思路撞南墙
                    if (s[i - 1] == t[j - 1]) {
                        dptable[i][j] = dptable[i - 1][j - 1]
                    } else {
                        dptable[i][j] = dptable[i][j - 1]
                    }
                }
            }
        }
    }
    return dptable[s.length][t.length]
};

isSubsequence('b', 'c')