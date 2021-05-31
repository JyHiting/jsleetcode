/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */

//异或运算性质
// 相同为0
// 不同为1
// 满足交换律
var decode = function (encoded, first) {

    let result = [first]
    for (let idx = 0; idx < encoded.length; idx++) {
        let num = encoded[idx]
        result.push(first ^ encoded[idx])
        first = result[result.length - 1]
    }
    return result
};