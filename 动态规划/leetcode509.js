// var fib = function (n) {
    
//     if (n == 0) {
//         return 0
//     }
//     if (n == 1) {
//         return 1
//     }
//     return fib(n-1) + fib(n-2)
// };


//加一个备忘录
// var fib = function (n) {
    
//     let arr = new Array(n + 1).fill(-1)
//     return helper(arr,n)
// };

// var helper = function (memo, n) {
//     if (memo[n] != -1) {
//         //已经有了
//         return memo[n]
//     } else { 
//         if (n == 0 || n == 1) {
//             memo[n] = n
//             return n
//         } else { 
//             memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
//             return memo[n]
//         }
//     }
// }


//2个变量保存状态压缩
// var fib = function (n) {
//     if (n == 0) {
//         return 0
//     }
//     if (n == 1) {
//         return 1
//     }
//     let num1 = 0, num2 = 1
//     for (let i = 2; i <= n; i++) {
//         let sum = num1 + num2
//         num1 = num2
//         num2 = sum
//     }
//     return num2
// }


//队列保存状态压缩
var fib = function (n) { 
    let stack = []
    for (let i = 0; i <= n; i++) {
        if (stack.length == 2) {
            stack.push(stack[0]+stack[1])
            stack.shift()
        } else { 
            stack.push(i)
        }
    }
    return stack.pop()
}



