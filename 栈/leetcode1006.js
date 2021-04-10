/**
 * @param {number} N
 * @return {number}
 */
 var clumsy = function (N) {
     
    let stack = [], symbols = ['*', '/', '+', '-']
    while (N > 0) {
        if (stack.length == 0) {
            stack.push(N)
        } else {
            let _symbol = symbols.shift()
            if (_symbol === '*') {
                stack.push(stack.pop() * N)
            } else if (_symbol === '/') {
                //有个小问题可能要注意：正负数的floor和我一开始的认识不一样
                //floor不管正负其实都是取左边的值，但是题意的意思不是,题意
                //的意思是负数要左取，整数要右取
                // let pop = stack.pop()
                // if (pop > 0) {
                //     stack.push(Math.floor(pop/N))
                // } else {
                //     stack.push(Math.ceil(pop/N))
                // }

                //稍微调整下代码
                let pop = stack.pop()
                if (pop > 0) {
                    stack.push(Math.floor(pop/N))
                } else {
                    stack.push(-Math.floor(-pop/N))
                }
            } else if (_symbol === '+') {
                stack.push(N)
            } else {
                stack.push(-N)
            }
            symbols.push(_symbol)
        }
        N -= 1
    }
    let result = stack.reduce((total, curVal) => {
        return total + curVal
    })
    return result
};

clumsy(10)

