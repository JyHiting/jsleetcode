var dailyTemperatures = function (T) {
    let result = new Array(T.length).fill(0)
    let stack = []
    T.forEach((item,idx) => {
        while (stack.length != 0 && item > T[stack[stack.length - 1]]) {
            let top = stack.pop()
            result[top] = idx - top
        }
        stack.push(idx)
    });
    return result
};

dailyTemperatures([73,74,75,71,69,72,76,73])