//很low的解法不用二位数组
var rob = function (nums) {
    if (nums.length == 0) {
        return 0
    }
    let dpT = new Array(2)
    for (let i = 0; i < dpT.length; i++) {
        let arr = new Array(nums.length).fill(0)
        dpT[i] = arr
    }
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            dpT[0][0] = 0 //0代表不偷第i个元素
            dpT[1][0] = nums[0] //1代表偷第i个元素
        } else {
            //第i个元素不选的情况下 
            dpT[0][i] = Math.max(dpT[0][i - 1], dpT[1][i - 1])
            //第i个元素选的情况下
            dpT[1][i] = dpT[0][i - 1] + nums[i]
        }
    }
    return Math.max(dpT[0][nums.length - 1], dpT[1][nums.length - 1])
};


var rob = function (nums) {
    let dptable = new Array(nums.length).fill(0)
    for (let i = 0; i < dptable.length; i++) {
        let arr = new Array(2)
        dptable[i] = arr
    }
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            dptable[i][0] = 0
            dptable[i][1] = nums[i]
        } else {
            //站在当前房子面前做决策：选则抢或者不抢
            dptable[i][0] = Math.max(dptable[i - 1][0], dptable[i - 1][1])
            dptable[i][1] = dptable[i - 1][0] + nums[i]
        }

        result = Math.max(Math.max(dptable[i][0], dptable[i][1]), result)
    }
    return result
};