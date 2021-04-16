
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {

    const strs = nums.map((x) => {
        return x.toString()
    })
    strs.sort((a, b) => {
        return (b + a) - (a + b)
    })
    let result = ""
    strs.forEach(ele => {
        result += ele
    });
    if (result.startsWith('0')) {
        return '0'
    }
    return result
};

largestNumber([3, 30, 34, 5, 9])