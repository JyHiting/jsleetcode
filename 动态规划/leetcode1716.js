//可以压缩状态
//当我判定这道题能用动态规划解题的时候，脑海中就要不停的闪现几个词汇：
//状态->抉择->新状态->抉择->新状态......
//抉择就是我要考虑的状态方程
var massage = function (nums) {
    if (nums.length == 0) {
        return 0
    }
    //初始化一个二维数组，用来记录状态：
    //状态是：到i的时候，i选择和i不选择这2个状态
    //从中抉择生成新状态
    let dpTable = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        let arr = new Array(2)
        dpTable[i] = arr
    }
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            dpTable[i][0] = 0
            dpTable[i][1] = nums[i]
        } else {
            dpTable[i][0] = Math.max(dpTable[i - 1][1], dpTable[i - 1][0])
            dpTable[i][1] = dpTable[i - 1][0] + nums[i]
        }
    }
    return Math.max(dpTable[nums.length - 1][1], dpTable[nums.length - 1][0])
};