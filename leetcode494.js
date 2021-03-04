var findTargetSumWays = function (nums, S) {
    let dpTable = new Array(nums.length)
    for (let i = 0; i < dpTable.length; i++) {
        let arr = new Array(1000+1000+1).fill(0)
        dpTable[i] = arr
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = -1000; j <= 1000; j++) {
            if (i == 0) {
                if (nums[0] == j) {
                    if (j == 0) {
                        dpTable[0][j+1000] =  2
                    } else { 
                        dpTable[0][j+1000] =  1
                    }
                } else {
                    dpTable[0][j+1000] =  0
                }
            } else {
                dpTable[i][j] = dpTable[i-1][j-nums[i]+1000] + dpTable[i-1][j+nums[i]+1000]
            }
        }
    }
    return dpTable[nums.length-1][S+1000]
};

findTargetSumWays([1,1,1,1,1],3)