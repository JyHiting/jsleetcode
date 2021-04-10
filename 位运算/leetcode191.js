/**
 * @param {number} n - a positive integer
 * @return {number}
 */

//移位运算符>>>  >>是不对的
var hammingWeight = function (n) {
    let count = 0
    while (n != 0) {
        //每次n与1进行与操作，结果为1说明后面最后1位为1要么为0
        count += n & 1
        //然后右移1位挤掉最后移位继续判定
        n = n >>> 1
    }
    return count
};
//通过mask去和每一位比较进行与运算来求结果
var hammingWeight = function(n) {
    let count = 0
    let mask = 1
    for (let idx = 0; idx < 32; idx++) {
        if ((mask&n)!=0) {
            count++
        }
        mask=mask<<1
    }
    return count
};
 
hammingWeight(4294967293)

