//动态规划多表
var maxProduct = function (nums) {
    let minTable = new Array(nums.length)
    let maxTable = new Array(nums.length)

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            minTable[i] = nums[i]
            maxTable[i] = nums[i]
        } else { 
            minTable[i] = Math.min(nums[i], minTable[i-1] * nums[i], maxTable[i-1] * nums[i])
            maxTable[i] = Math.max(nums[i],minTable[i-1]*nums[i],maxTable[i-1]*nums[i])
        }
    }
    let result = Number.MIN_SAFE_INTEGER
    maxTable.forEach((item) => {
        result = Math.max(result,item)
    });
    return result
};

maxProduct([2,3,-2,4])