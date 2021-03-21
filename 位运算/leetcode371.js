/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

//第一次刷没想到这么解，需要二刷
//此题主要是观察常规位运算结果的规律，利用规律来模拟运算
var getSum = function (a, b) {

    while (b != 0) {
        //异或运算：相同为1，不同为0
        //得到结果为不带进位的结果
        let temp = a ^ b
        //与运算：一个为1就为1
        //得到可能的各个进位的值（不一定有一个位置可以进位）
        //左移1就是加到下一个位置上
        b = (a & b) << 1
        a = temp
    }
    return a
};