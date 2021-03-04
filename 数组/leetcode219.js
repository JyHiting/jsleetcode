var containsNearbyDuplicate = function (nums, k) {
    //用map作为窗口结构更好
    let window = []//max k+1
    for (let i = 0; i < nums.length; i++) {
        if (window.length == k + 1) {
            window.shift()
        }
        //利用includes内置库函数还是有问题
        if (window.includes(nums[i])) {
            return true
        } else {
            window.push(nums[i])
        }
    }
    return false
};

containsNearbyDuplicate([1, 0, 1, 1], 1)