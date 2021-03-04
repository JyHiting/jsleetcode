var containsDuplicate = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i]
        if (map.has(ele)) {
            return true
        } else {
            map.set(ele, i)
        }
    }
    return false
};