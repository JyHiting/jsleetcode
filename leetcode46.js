//回溯
//回溯就是暴力求解，我们还可以暴力迭代法
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = []
    let path = []
    helper(result,path,nums)
    return result
};
//每一个helper递归所做的事情都是：在一个数组里面选择一个我们用来排序的元素，然后加入path路径
//每一次递归函数的结束都要把path里的元素pop出来一个，回溯到上一个状态继续搞事情
function helper(result, path, list) {
    if (list.length == 0) {
        result.push(path.slice(0))
        return
    }
    for (let i = 0; i < list.length; i++) {
        //注意要copy数组不能使用原始的，防止处理数组造成的干扰
        const ele = list[i];
        path.push(ele)
        let arr = list.slice()
        arr.splice(i,1)
        helper(result,path,arr)
        path.pop()
    }
}

permute([1,2,3])