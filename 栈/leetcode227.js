/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {

    //numStr用来记录数字字符串
    //result用来压栈运算之后的结果，最后result中都是乘除之后的结果相加即可
    //op记录最近的一个元素符号：如果是+那么当前数字直接放入result中如果是-就取
    //反放入，如果是 * /就取出上一个result记录的数字和当前的数字计算然后放入result
    let result = [], numStr = "", symbols = ['*', '/', '+', '-'], op = '+'
    let helper = (ele) => {
        if (ele === "") {
            return
        }
        switch (ele) {
            case '*':
                result.push(result.pop() * result.pop())
                break;
            case '/':
                let num2 = result.pop()
                let num1 = result.pop()
                result.push(parseInt(num1 / num2))
                break;
            case '+':
                result.push(result.pop())
                break;
            case '-':
                result.push(-result.pop())
                break;
            default:
                break;
        }
        op = ''
    }

    for (let i = 0; i < s.length; i++) {
        let ele = s[i]
        if (ele === '') {
            //空格
            if (numStr.length != 0) {
                result.push(parseInt(numStr))
                numStr = ""
                helper(op)
            }
            continue;
        } else if (symbols.includes(ele)) {
            //运算符
            if (numStr.length != 0) {
                result.push(parseInt(numStr))
                numStr = ""
                helper(op)
            }
            op = ele
        } else {
            //数字
            numStr += ele 
        }
    }
    //最后一个可能存在的数字
    if (numStr.length != 0) {
        result.push(parseInt(numStr))
        numStr = ""
        helper(op)
    }

    return result.reduce((total, curVal) => {
        return total + curVal
    })
};

calculate("3+2*2")