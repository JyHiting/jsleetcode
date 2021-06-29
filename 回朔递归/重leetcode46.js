// //回溯
// //回溯就是暴力求解，我们还可以暴力迭代法
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function (nums) {
//     let result = []
//     let path = []
//     helper(result, path, nums)
//     return result
// };
// //每一个helper递归所做的事情都是：在一个数组里面选择一个我们用来排序的元素，然后加入path路径
// //每一次递归函数的结束都要把path里的元素pop出来一个，回溯到上一个状态继续搞事情
// function helper(result, path, list) {
//     if (list.length == 0) {
//         result.push(path.slice(0))
//         return
//     }
//     for (let i = 0; i < list.length; i++) {
//         //注意要copy数组不能使用原始的，防止处理数组造成的干扰
//         const ele = list[i];
//         path.push(ele)
//         let arr = list.slice()
//         arr.splice(i, 1)
//         helper(result, path, arr)
//         path.pop()
//     }
// }


//回溯，每一次决策就把决策选择的元素放入路径中，完了就把该结果从路径中移除
var permute = function (nums) {

    let result = [], path = []
    let set = new Set(nums)
    let backtrack = (curSet) => {
        if (curSet.size == 0) {
            result.push(path.slice(0))
        }
        for (let item of curSet) {
            path.push(item)
            //每一次为了保持一个纯净的遍历集合都开辟一个新的浪费空间
            let nextSet = new Set(curSet)
            nextSet.delete(item)
            backtrack(nextSet)
            path.pop()
        }
    }
    backtrack(set)
    return result
};

var permute = function (nums) {

    let result = [], path = []
    let backtrack = () => {
        if (path.length == nums.length) {
            result.push(path.slice(0))
        }
        for (let item of nums) {
            //结合题意设置一些变量，状态位等使得减少局部变量的开辟导致的空间浪费
            if (path.includes(item)) {
                continue
            }
            path.push(item)
            backtrack()
            path.pop()
        }
    }
    backtrack()
    return result
};

var permute = function (nums) {

    let result = [], path = [], used = new Array(nums.length).fill(0)
    let backtrack = () => {
        if (path.length == nums.length) {
            result.push(path.slice(0))
        }
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]
            //结合题意设置一些变量，状态位等使得减少局部变量的开辟导致的空间浪费
            if (used[i] == 1) {
                continue
            } else {
                path.push(num)
                used[i] = 1
                backtrack()
                path.pop()
                used[i] = 0
            }
        }
    }
    backtrack()
    return result
};

permute([1, 2, 3])



