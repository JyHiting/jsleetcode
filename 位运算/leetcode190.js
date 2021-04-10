/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

//每次左移动一位然后再右移动一位比较此时是否相等
//相等说明左移出去的那位为0要么为1
var reverseBits = function (n) {

    let result = 0
    for (let i = 0; i < 32; i++) {

        let val = n << 1 >>> 1 == n ?0:1
        if (val == 1) {
            result += Math.pow(2,i)
        } 
        n <<= 1
        if (n == 0) {
            //剪枝一下
            break
        }
     }
    return result
};

