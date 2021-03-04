//动态规划
//可压缩状态记录2个状态
var numWays = function (n) {
    let dptable = []
    dptable[0] = 1
    for (let i = 1; i <= n; i++) {
        if (i == 1) {
            dptable[1] = 1
        } else if (i == 2) {
            dptable[2] = 2
        } else {
            dptable[i] = (dptable[i - 1] + dptable[i - 2]) % 1000000007
        }
    }
    return dptable[n]
};

//递归超时
var numWays = function (n) {

    if (n == 0 || n == 1) {
        return 1
    }
    return (numWays(n - 1) + numWays(n - 2)) % 1000000007
};