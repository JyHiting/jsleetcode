//移位运算
var hammingDistance = function (x, y) {
    let z = x ^ y
    let result = 0
    while (z != 0) {
        let tmp = z
        if (tmp >> 1 << 1 != z) {
            result++
        }
        z = z >> 1
    }
    return result
};

hammingDistance(1, 4)
