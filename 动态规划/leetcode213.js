
var rob = function (nums) {
    //一开始table设计为二维导致最后一个的决策会牵连到首次的决策，此时判断首次的决策选还是不选都不行
    //分开来讨论首次抢或者不抢那么后续的决策就不会再影响到前面
    //第一个抢
    let table1 = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            table1[i] = nums[0]
        } else if (i == 1) {
            //第二个就不能抢
            table1[i] = table1[i - 1]
        } else if (i == nums.length - 1) {
            // 最后一个也不能抢
            table1[i] = table1[i - 1]
        } else {
            table1[i] = Math.max(nums[i] + table1[i - 2], table1[i - 1])
        }
    }

    //第一个不偷
    let table2 = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            table2[i] = 0
        } else if (i == 1) {
            table2[i] = nums[i]
        } else {
            table2[i] = Math.max(nums[i] + table2[i - 2], table2[i - 1])
        }
    }
    return Math.max(table1[nums.length - 1], table2[nums.length - 1])
};