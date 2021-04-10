/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//二分查找
//最容易想到的方法，空间占用比较大，不考虑
// var searchMatrix = function (matrix, target) {
//     let tmpArr = []
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             tmpArr.push(matrix[i][j])
//         }
//     }
//     //二分查找
//     let left = 0, right = tmpArr.length - 1
//     while (left <= right) {
//         let mid = Math.floor(left + (right - left) / 2)
        
//         if (tmpArr[mid] > target) {
//             right = mid - 1
//         } else if (tmpArr[mid] < target) {
//             left = mid + 1
//         } else {
//             return true
//         }
//     }
//     return false
// };

//改进一下二分查找
// var searchMatrix = function (matrix, target) {

//     //先用列上找到一个大于target的最近的值
//     //然后顺着这一行去扫描查找对应target
//     //row记录大于target的最近的行
//     let left = 0, right = matrix.length - 1, row = 0
//     while (left <= right) {
//         let mid = Math.floor(left + (right - left) / 2)
//         if (matrix[mid][0] > target) {
//             right = mid - 1
//         } else if (matrix[mid][0] < target) {
//             left = mid + 1
//             row = mid
//         } else {
//             //在列上找到返回，没有找到就要从行搜索
//             return true
//         }
//     }

//     left = 0, right = matrix[0].length - 1
//     while (left <= right) {
//         let mid = Math.floor(left + (right - left) / 2)
//         if (matrix[row][mid] > target) {
//             right = mid - 1
//         } else if (matrix[row][mid] < target) {
//             left = mid + 1
//         } else {
//             return true
//         }
//     }
//     return false
// }

//根据下标升序二分查找
var searchMatrix = function (matrix, target) {

    let left = 0, right = matrix.length * matrix[0].length - 1
    while (left <= right) {
        let mid = Math.floor(left + (right - left)/2)
        if (matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length] > target) {
            right = mid - 1
        } else if (matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length] < target) {
            left = mid + 1
        } else {
            return true
        }
    }
    return false
}


searchMatrix([[1,3]],3)