/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let symbols = ['*', '/', '+', '-'],stack = []
    for (let i = 0; i < tokens.length; i++) {
        let ele = tokens[i]
        if (symbols.includes(ele)) {
            //运算符开始计算
            let num2 = stack.pop()
            let num1 = stack.pop()
            switch (ele) {
                case '*':
                    stack.push(num1 * num2)
                    break;
                case '/':
                    stack.push(parseInt(num1/num2))
                    break;
                case '+':
                    stack.push(num1 + num2)
                    break;
                case '-':
                    stack.push(num1 - num2)
                    break;
                default:
                    break;
            }
        } else {
            //数字压栈
            stack.push(parseInt(ele))
        }
    }
    return stack.pop()
};

evalRPN(["4","3","-"])