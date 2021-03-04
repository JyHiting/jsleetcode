var twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        let left = i + 1, right = numbers.length - 1
        while (left <= right) {
            let mid = Math.round(left + (right - left) / 2)
            if (numbers[mid] == target - numbers[i]) {
                //找到
                //+1满足题意的下标从1开始不是从0开始
                return [i + 1, mid + 1]
            } else if (numbers[mid] > target - numbers[i]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return []
};

var twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1
    while (left <= right) {
        if (numbers[left] + numbers[right] == target) {
            return [left + 1, right + 1]
        } else if (numbers[left] + numbers[right] < target) {
            left++
        } else {
            right--
        }
    }
    return []
};


twoSum([2, 7, 11, 15], 9)