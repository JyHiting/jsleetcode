//纯递归超时
var fib = function (n) {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1
    }
    return (fib(n - 1) + fib(n - 2)) % 1000000007
};

//动态规划
var fib = function (n) {
    //这里状态压缩我只需要记录2个状态，那么就开辟1个max为2的数组记录即可
    let dptable = []
    for (let i = 0; i <= n; i++) {
        if (i == 0) {
            dptable.unshift(0)
        } else if (i == 1) {
            dptable.unshift(1)
        } else {
            dptable.unshift((dptable[0] + dptable[1]) % 1000000007)
            dptable.pop()
        }
    }
    return dptable.shift()
};