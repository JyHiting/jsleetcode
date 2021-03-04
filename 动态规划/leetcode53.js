//动态规划即填表法
// var maxSubArray = function (nums) {
//     //二维数组记录i到j的整数和
//     let dpTable = new Array(nums.length)
//     for (let i = 0; i < nums.length; i++) {
//         let arr = new Array(nums.length).fill(0)
//         dpTable[i] = arr
//     }
//     let max = 0
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j <= i; j++) {

//         }
//     }
// };



//直观暴力解法但不可取超时
// var maxSubArray = function (nums) {
//     let max = nums[0]
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             let total = sum(nums.slice(i, j + 1))
//             max = Math.max(total, max)
//         }
//     }
//     return max
// }

// function sum(nums) {
//     return nums.reduce((total, curVal) => {
//         return total + curVal
//     })
// }


//我想增加一个备忘录但是测试数据庞大的时候报错：heap out of memory
//此路走不通了
// var maxSubArray = function (nums) {
//     let max = nums[0]
//     let records = new Array(nums.length)
//     for (let i = 0; i < nums.length; i++) {
//         let arr = new Array(nums.length).fill(undefined)
//         records[i] = arr
//     }
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             if (records[i][j] == undefined) {
//                 let total = sum(nums.slice(i, j + 1))
//                 records[i][j] = total
//             }
//             max = Math.max(records[i][j], max)
//         }
//     }
//     return max
// }

// function sum(nums) {
//     return nums.reduce((total, curVal) => {
//         return total + curVal
//     })
// }

//动态规划
var maxSubArray = function (nums) {
    //dpTable[i] 表示以i下标结尾的数组的最大子序和的值
    let dpTable = new Array(nums.length)
    dpTable[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dpTable[i] = Math.max(dpTable[i - 1] + nums[i], nums[i])
    }
    return Math.max(...dpTable)
};




