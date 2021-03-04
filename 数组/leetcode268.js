//数学知识
// var missingNumber = function (nums) {
//     let total = (0 + nums.length) * (nums.length + 1) / 2
//     let curTotal = nums.reduce((total, num) => {
//         return total + num
//     })
//     return total - curTotal
// };

var missingNumber = function (nums) {
    nums.sort((a, b) => {
        return a - b
    })
    for (let i = 0; i <= nums.length; i++) {
        if (i != nums[i]) {
            return i
        }
    }
};

missingNumber([0, 1])