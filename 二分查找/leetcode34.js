//都能想到的方法，最笨的实现
//遍历
var searchRange = function (nums, target) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        const ele = nums[i];
        if (ele == target) {
            if (result.length == 0) {
                result.push(i)
                result.push(i)
            } else {
                result.pop()
                result.push(i)
            }
        }
    }
    if (result.length == 0) {
        result = new Array(2).fill(-1)
    }
    return result
};

//二分查找
var searchRange = function (nums, target) {
    let left = 0, right = nums.length - 1
    //魔鬼出没的地方1
    //需不需要==
    let rightIdx = nums.length
    while (left <= right) {
        //魔鬼小细节可能溢出
        let mid = Math.floor(left + (right - left) / 2)
        //魔鬼小细节等还是不加等
        if (nums[mid] > target) {
            //魔鬼小细节+1 -1需不需要
            right = mid - 1
        } else {
            rightIdx = mid
            left = mid + 1
        }
    }
    left = 0, right = nums.length - 1
    let leftIdx = 0
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] >= target) {
            leftIdx = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    //判断坐标leftIdx和rightIdx是否合法（不一定有结果的）
    if (nums[leftIdx] == target && nums[rightIdx] == target) {
        return [leftIdx, rightIdx]
    } else {
        return [-1, -1]
    }
};

searchRange([5, 7, 7, 8, 8, 10], 8)



