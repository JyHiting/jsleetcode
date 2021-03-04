var missingNumber = function (nums) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        //这里向上向下取整都一样
        let mid = Math.ceil(left + (right - left) / 2)
        if (mid == nums[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    //最后出结果的时候left一定是不满足<=right的，left从mid == nums[mid]到不满足mid == nums[mid]然后跳出while
    //的left值就是那个临界值右边第一个满足mid != nums[mid]的值
    return left
};
missingNumber([0, 1, 3])