var maxSubArray = function (nums) {
    //dp表含义：以i元素结尾的的子数组的和的最大值
    //和53题一样
    let dptable = []
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            dptable[i] = nums[i]
        } else {
            dptable[i] = Math.max(nums[i], nums[i] + dptable[i - 1])
        }
    }
    return Math.max(...dptable)
};