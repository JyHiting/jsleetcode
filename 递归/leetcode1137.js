// var tribonacci = function (n) {
//     if (n == 0) {
//         return 0
//     }
//     if (n == 1) {
//         return 1
//     }
//     if (n == 2) {
//         return 1
//     }
//     return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
// };

//动态规划
var tribonacci = function (n) {
    //压缩状态
    let dptable = []//max 3
    for (let i = 0; i <= n; i++) {
        if (i == 0) {
            dptable.unshift(0)
        } else if (i == 1) {
            dptable.unshift(1)
        } else if (i == 2) {
            dptable.unshift(1)
        } else {
            dptable.unshift(dptable[0] + dptable[1] + dptable[2])
            dptable.pop()
        }
    }
    return dptable.shift()
};

tribonacci(35)