var minSubArrayLen = function (target, nums) {
    //初始情况minLen很大然后步步紧缩到最小值，还要判断无值的情况
    let minLen = nums.length + 1, left = 0, right = 0, sum = 0
    while (right < nums.length) {
        sum += nums[right]
        while (sum >= target) {
            //满足条件
            //找到一个长度
            minLen = Math.min(minLen, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }
    return minLen == nums.length + 1 ? 0 : minLen
};

minSubArrayLen(15, [1, 2, 3, 4, 5])