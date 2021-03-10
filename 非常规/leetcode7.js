//32位最小：-2147483648
//32位最大：2147483647

//数学运算
var reverse = function (x) {
    let result = 0
    let max = 2147483647
    let min = -2147483648
    do {
        let tmp = x % 10
        result = result * 10 + tmp
        x = parseInt(x / 10)
        if (result > max || result < min) {
            return 0
        }
    } while (x != 0);
    return result
};

reverse(123)


