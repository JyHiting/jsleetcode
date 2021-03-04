var search = function (nums, target) {
    let left = 0, right = nums.length - 1
    let center = 0, total = 0
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] == target) {
            //数组中可能存在连续的给定target，根据二分查找找到一个target
            //具体这个找到的target在连续数组中的位置不关心，找到一个就行
            //以找到的那个target为中心扩散找相同的target
            let i = mid, j = mid
            total++
            while (true) {
                i--
                if (i < 0 || nums[i] < target) {
                    break
                } else {
                    total++
                }
            }
            while (true) {
                j++
                if (j > nums.length - 1 || nums[j] > target) {
                    break
                } else {
                    total++
                }
            }
            break
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return total
};

search([5, 7, 7, 8, 8, 8, 10], 8)