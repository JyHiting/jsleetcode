var climbStairs = function (n) {
    let table = new Array(n + 1)
    for (let i = 1; i <= n; i++) {
        if (i == 1) {
            table[i] = 1//只有一种走法
        } else if (i == 2) {
            table[i] = 2//有2种走法
        } else {
            table[i] = table[i - 1] + table[i - 2]
        }
    }
    return table[n]
};