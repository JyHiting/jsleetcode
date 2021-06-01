
var lengthOfLIS = function (nums) {
    if (nums.length == 1) {
        return 1
    }
    //dptable ：以元素i结尾的最大所求值
    let dptable = new Array(nums.length).fill(0)

    let result = 0
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            dptable[i] = 1
        } else {
            dptable[i] = 1
            for (let j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dptable[i] = Math.max(dptable[i], dptable[j] + 1)
                }
            }
            result = Math.max(result, dptable[i])
        }
    };
    return result
}

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])