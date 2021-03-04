
var dailyTemperatures = function (T) {
    //记录结果
    let result = []
    //这里堆栈记录局部数据
    let stack = []
    for (let i = T.length - 1; i >= 0; i--) {
        let cur = T[i]
        while (stack.length != 0 && T[stack[stack.length - 1]] <= cur) {
            stack.pop()
        }
        if (stack.length == 0) {
            result.unshift(0)
        } else {
            result.unshift(stack[stack.length - 1] - i)
        }
        stack.push(i)
    }
    return result
};
let tmp = dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78])
console.log(666);