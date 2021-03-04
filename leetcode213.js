var rob = function (nums) {
    if (nums.length == 0) {
        return 0
    }
    let dpT1 = new Array(nums.length)
    //不偷第一个元素
    //最后一个元素可偷
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            dpT1[i] = 0
        } else if (i == 1) {
            dpT1[i] = nums[i]
        } else {
            dpT1[i] = Math.max(nums[i] + dpT1[i - 2], dpT1[i - 1])
        }
    }
    //偷第一个元素
    //最后一个元素不可偷
    let dpT2 = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            dpT2[i] = nums[i]
        } else if (i == nums.length - 1) {
            dpT2[i] = dpT2[i - 1]
        } else if (i == 1) {
            dpT2[i] = Math.max(nums[i], dpT2[i - 1])
        } else {
            dpT2[i] = Math.max(nums[i] + dpT2[i - 2], dpT2[i - 1])
        }
    }
    return Math.max(dpT1[nums.length - 1], dpT2[nums.length - 1])
};