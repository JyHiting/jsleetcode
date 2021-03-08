var multiply = function (num1, num2) {
    let result = "0"
    while (num2 != "0") {
        result = add(result, num1)
        num2 = dec(num2, "1")
    }
    return result
};

multiply("2", "3")



function dec(big, small) {
    //string to array
    let bigArr = big.split('')
    let smallArr = small.split('')

    let bigIdx = bigArr.length - 1
    let smallIdx = smallArr.length - 1
    let next = 0
    while (bigIdx >= 0 && smallIdx >= 0) {
        const bigNum = bigArr[bigIdx]
        const smallNum = smallArr[smallIdx]
        if ((bigNum - next) >= smallNum) {
            bigArr[bigIdx] = (bigNum - smallNum - next).toString()
            next = 0
        } else {
            //借一位
            bigArr[bigIdx] = (bigNum - next + 10 - smallNum).toString()
            next = 1
        }
        bigIdx--
        smallIdx--
    }
    while (bigIdx >= 0 && next == 1) {
        const bigNum = bigArr[bigIdx]
        if (bigNum >= next) {
            bigArr[bigIdx] = (bigNum - next).toString()
            next = 0
            break
        } else {
            //借一位
            bigArr[bigIdx] = (bigNum + 10 - next).toString()
            next = 1
        }
        bigIdx--
    }
    while (true) {
        if (bigArr.length == 1) {
            break
        }
        if (bigArr[0] == '0') {
            bigArr.shift()
        } else {
            break
        }
    }
    return bigArr.join('')
}

function add(num1, num2) {
    //string to array
    let num1Arr = num1.split('')
    let num2Arr = num2.split('')

    let next = 0
    let num1Idx = num1Arr.length - 1
    let num2Idx = num2Arr.length - 1
    while (num1Idx >= 0 && num2Idx >= 0) {
        let _num1 = parseInt(num1[num1Idx])
        let _num2 = parseInt(num2[num2Idx])

        num1Arr[num1Idx] = ((_num1 + _num2 + next) % 9).toString()
        next = parseInt((_num1 + _num2 + next) / 9)
        num1Idx--
        num2Idx--
    }
    if (next == 0) {
        return num1Arr.join('')
    } else {
        while (num1Idx >= 0) {
            let _num1 = parseInt(num1[num1Idx])
            num1Arr[num1Idx] = (_num1 + next) % 9
            next = parseInt((_num1 + next) / 9)
            num1Idx--
        }
        while (num2Idx >= 0) {
            let _num2 = parseInt(num1[num2Idx])
            num1Arr.unshift(((_num2 + next) % 9).toString())
            next = parseInt((_num2 + next) / 9)
            num2Idx--
        }
        if (next == 1) {
            num1Arr.unshift(next)
        }
        return num1Arr.join('')
    }
}

// let a = "123"
// let b = "920"
// let c = add(a, b)
// console.log(c);
