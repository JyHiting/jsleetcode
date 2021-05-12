/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (encoded) {

    //根据题意它是前 n 个正整数的排列
    //我们知道n的值
    let n = encoded.length + 1
    //且我们知道这n个数的异或A^B^C^D^E^F......的值
    let num1 = 0
    for (let idx = 1; idx <= n; idx++) {
        num1 ^= idx
    }
    //根据题意n是奇数可知encoded的长度为偶数
    //假设encoded为[A,B,C,D,E,F]
    //我们相隔一个元素取出来进行异或B^D^F
    //我们会发现规律隔一个元素取出来异或的结果num2就是我们要求
    //的数组的除第一个元素的所有的元素的异或结果
    let num2 = 0
    for (let idx = 1; idx < encoded.length; idx += 2) {
        num2 ^= encoded[idx]
    }
    //我们要求第一个元素设为X
    //X^num2 = num1
    //X^num2^num2 = num1^num2
    //X = num1^num2
    let X = num1 ^ num2
    //拿到第一个元素之后此题就转化为1720了
    let result = [X], num = X
    for (let idx = 0; idx < encoded.length; idx++) {
        result.push(encoded[idx] ^ num)
        num = result[result.length - 1]
    }
    return result
};


decode([6, 5, 4, 6])