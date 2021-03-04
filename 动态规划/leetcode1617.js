var maxSubArray = function (nums) {
    //该dptable的含义是以i结尾的最大连续字串和
    //dptable填满之后计算数组元素最大值即可
    //可以压缩状态不用这个表记录子问题：保存前一个状态即可
    let dpTable = []
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            //base情况
            dpTable[0] = nums[i]
            result = dpTable[0]
        } else {
            dpTable[i] = Math.max(dpTable[i - 1] + nums[i], nums[i])
            result = Math.max(dpTable[i], result)
        }
    }
    return result
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])