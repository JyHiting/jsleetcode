//32位最小：-2147483648
//32位最大：2147483647
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


// let a = -Math.pow(2, 31)
// let b = Math.pow(2,31) - 1
// console.log(a);
// console.log(b);

let a = -6
console.log(a%10);

