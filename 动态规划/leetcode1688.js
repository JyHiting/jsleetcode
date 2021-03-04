

回朔算法
var numberOfMatches = function (n) {
    let dptable = []
    dptable[0] = 0
    dptable[1] = 0
    dptable[2] = 1
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            //偶
            dptable[i] = dptable[i - 2] + 1
        } else {
            //奇
            dptable[i] = dptable[i - 1]
        }

    }
    return dptable[n - 1]
};