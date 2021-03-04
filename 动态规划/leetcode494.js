var findTargetSumWays = function (nums, S) {
    let max = nums.reduce((total, num) => {
        return total + num
    })
    let dptable = new Array(nums.length)
    for (let i = 0; i < dptable.length; i++) {
        let arr = new Array(max * 2 + 1).fill(0)
        dptable[i] = arr
    }
    for (let i = 0; i < dptable.length; i++) {
        for (let j = -max; j <= max; j++) {
            if (i == 0) {
                if (nums[0] == j) {
                    dptable[0][j + max]++
                }
                if (nums[0] == -j) {
                    dptable[0][j + max]++
                }
            } else {
                dptable[i][j + max] = dptable[i - 1][j - nums[i] + max] + dptable[i - 1][j + nums[i] + max]
            }
        }
    }
    return dptable[nums.length - 1][S]
};

findTargetSumWays([1, 1, 1, 1, 1], 3)