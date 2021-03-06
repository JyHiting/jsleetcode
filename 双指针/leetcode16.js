//双指针优化部分复杂性
// var threeSumClosest = function (nums, target) {
//     nums.sort((a, b) => {
//         return a - b
//     })
//     let sum = 0, left = 0, min = Number.MAX_SAFE_INTEGER, result = 0
//     for (let i = 0; i < nums.length - 2; i++) {
//         let left = i + 1, right = nums.length - 1
//         while (left < right) {
//             let sum = nums[i] + nums[left] + nums[right]
//             if (min > Math.abs(sum - target)) {
//                 //发现更小的绝对差
//                 min = Math.abs(sum - target)
//                 result = sum
//             }
//             if (sum > target) {
//                 right--
//             } else if (sum < target) {
//                 left++
//             } else {
//                 //相差为0最接近就是你了后面不遍历了
//                 return target
//             }
//         }
//     }
//     return result
// };



//多重循环+剪枝
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => {
        return a - b
    })
    let min = Number.MAX_SAFE_INTEGER, result = 0
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            let sum = nums[i] + nums[j] + nums[j + 1]
            if (min > Math.abs(sum - target)) {
                min = Math.abs(sum - target)
                result = sum
            }
            //剪枝
            if (sum > target) {
                break
            } else if (sum == target) {
                return target
            }

            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k]
                if (min > Math.abs(sum - target)) {
                    min = Math.abs(sum - target)
                    result = sum
                }
                //剪枝
                if (sum > target) {
                    break
                } else if (sum == target) {
                    return target
                }
            }
        }
    }
    return result
};

threeSumClosest([-1, 2, 1, -4], 1)

