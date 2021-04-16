/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function (nums) {
//     //一个元素直接返回
//     if (nums.length == 1) {
//         return nums[0]
//     }
//     //首尾比较观察是否就是有序数组，是就返回首元素
//     if (nums[0] < nums[nums.length - 1]) {
//         return nums[0]
//     }
//     //走到这里说明nums符合一个特性：从首元素开始升序然后到某个元素开始出现一个拐点
//     //那个拐点之后第一个元素就是要找的值
//     let left = 0, right = nums.length - 1
//     while (left <= right) {
//         let mid = Math.floor(left + (right - left) / 2)

//         if (nums[mid] < nums[mid - 1]) {
//             //mid指向的元素如果小于前一个元素，那么此时mid就是要找的最小值
//             return nums[mid]
//         } else {
//             //收缩范围
//             //mid指向的元素大于nums的尾元素那么说明要找的值落在拐点右边去右边找
//             //反之落在左边
//             if (nums[mid] > nums[nums.length - 1]) {
//                 left = mid + 1
//             } else {
//                 right = mid - 1
//             }
//         }
//     }
// };

//nums中有个拐点
var findMin = function (nums) {

    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else if (nums[mid] < nums[right]) {
            right = mid
        } else {
            return nums[mid]
        }
    }
};

findMin([3, 4, 5, 1, 2])