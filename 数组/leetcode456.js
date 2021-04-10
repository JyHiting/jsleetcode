/**
 * @param {number[]} nums
 * @return {boolean}
 */

//暴力超时
// var find132pattern = function (nums) {
//     if (nums.length < 3) {
//         return false
//     }
//     let result = false
//     for (let i = 0; i < nums.length - 2; i++) {
//         let  k = nums.length - 1
//         while (i < k) {
//             //在i到k之间找符合题意的k
//             let j = i + 1
//             while (j < k && nums[k] > nums[i]) {
//                 if (nums[j] > nums[k]) {
//                     //找到了
//                     return true
//                 }
//                 j++
//             }
//             k--
//         }
//     }
//     return result
// };

var find132pattern = function (nums) {

    let leftMin = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (leftMin < nums[i]) {
            let k = i + 1
            while (k < nums.length) {
                //去找符合题意的k
                if (nums[k] < nums[i] && nums[k] > leftMin) {
                    return true
                }
                k++
            }
        }
        leftMin = Math.min(leftMin,nums[i])
    }
    return false
};


