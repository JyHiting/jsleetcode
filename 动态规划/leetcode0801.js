
var waysToStep = function (n) {
    //初始化一个队列dpTable，且其大小最大为3
    //为3的目的是不需要一个完整的table记录状态
    //只需要压缩状态为3个即可
    let dpTable = []
    for (let i = 1; i <= n; i++) {
        //i = 1，2，3，为base情况
        if (i == 1) {
            dpTable.push(1)
        } else if (i == 2) {
            dpTable.push(dpTable[0] + 1)
        } else if (i == 3) {
            dpTable.push(dpTable[1] + dpTable[0] + 1)
        } else {
            //小心题意结果很大要取模别的没什么
            let next = ((dpTable[0] + dpTable[1]) % 1000000007 + dpTable[2]) % 1000000007
            dpTable.push(next)
            dpTable.shift()
        }
    }
    return dpTable.pop()
};

waysToStep(3)