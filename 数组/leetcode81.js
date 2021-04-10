/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
//利用map这样又太简单了应该不会让这样
// var search = function (nums, target) {
//     let map = new Map()
//     nums.forEach((item) => {
//         map.set(item, 1)
//     });
//     return map.has(target)
// };

//遍历
// var search = function (nums, target) {

//     if (target > nums[nums.length - 1]) {
//         //从左开始遍历
//         for (let i = 0; i < nums.length; i++) {

//             if (nums[i] == target) {
//                 return true
//             }
//             if (nums[i] > nums[i + 1]) {
//                 return false
//             }
//         }
//     } else {
//         //从右开始遍历
//         for (let i = nums.length - 1; i >= 0; i--) {

//             if (nums[i] == target) {
//                 return true
//             }
//             if (nums[i] < nums[i - 1]) {
//                 return false
//             }
//         }
//     }
//     return false
// };

//复习二分查找
//一般有序数组中找目标要想到二分查找
//当想到二分查找就要时刻注意细节问题
var search = function (nums, target) {

    //先把数组调整为升序
    nums.sort((a, b) => {
        return a - b
    })
    //升序完开始二分搜索
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] == target) {
            //找到
            return true
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false
}


search([1, 1], 0)

