//排序，掐头去尾找差距
var findUnsortedSubarray = function (nums) {
    let arrLen = nums.length
    let oldArr = nums.slice()
    nums.sort((a, b) => { 
        return a-b
    })
    let left = 0
    while (left < arrLen) {
        if (oldArr[left] != nums[left]) {
            let right = arrLen - 1
            while (right >= 0) {
                if (oldArr[right] != nums[right]) {
                    break
                } else { 
                    right--
                }
            }
            return right - left + 1
        } else { 
            left++
        }
    }
    return 0 
};

//不利用对比排序后的差异，就要自己找到边界移动了
var findUnsortedSubarray = function (nums) {
    let arrLen = nums.length
    let stack = []
    let left = 0
    while (left < arrLen) {
        if (left == 0) {
            stack.push(nums[left])
        } else { 
            if (stack[stack.length - 1] > nums[left]) {
                //找到左边开始的拐点
                //开始找右边开始的拐点
                //left和right指向的是下一个元素，当left和right和上次元素比发生拐弯了，要
                //记录上一个元素的位置作为我们要找的最大最小值排序的数组边界
                left -- 
                let right = arrLen - 1
                stack = []
                while (right >= 0) {
                    if (right == arrLen - 1) {
                        stack.push(nums[right])
                    } else { 
                        if (stack[stack.length - 1] < nums[right]) {
                            //找到右边开始的拐点
                            right++
                            //针对这个子数组排序找到最大，最小
                            //然后用最小，最大要左移，右移把最小，最大放到合适的位置
                            //放到合适的位置后那两个边界就是要调整的元素的最小边界
                            let newArr = nums.slice(left, right + 1)
                            newArr.sort((a, b) => { 
                                return a - b
                            })
                            let min = newArr[0]
                            let max = newArr[newArr.length - 1]

                            let left1 = left - 1
                            let right1 = right + 1
 
                            while (left1 >= 0) {
                                if (min >= nums[left1]) {
                                    break
                                } else { 
                                    left1 --
                                }
                            }
                            //找右边界
                            while (right1 < arrLen) {
                                if (max <= nums[right1]) {
                                    break
                                } else { 
                                    right1++
                                }
                            }
                            return (right1 - 1) - (left1 + 1) + 1
                        } else { 
                            stack.push(nums[right])
                        }
                    }
                    right --
                }
            } else { 
                stack.push(nums[left])
            }
        }
        left ++
    }
    return 0
};

findUnsortedSubarray([2,6,4,8,10,9,15])