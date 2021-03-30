/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function (nums, a, b, c) {
    let fX = (num) => {
        return a*Math.pow(num,2) + b*num + c
    }
    let result = nums.map(num => {
        return fX(num)
    }).sort((a,b) => {
        return a - b
    })

    return result
};

sortTransformedArray([-4,-2,2,4],1,3,5)



