/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//递归回溯不停的选择，剪枝去掉重复解
var subsetsWithDup = function (nums) {
    //排序的目的让相同元素放在一起
    nums.sort((a, b) => {
        return a - b
    })
    let result = [[]],path = []
    let helper = (left, right) => {
        if (left > right) {
            return
        }
        //记录上一次遍历的元素，这次和上次一样就调过
        let preEle = null
        for (let i = left; i <= right; i++) {
            if (i == left) {
                preEle = nums[left]
            } else {
                if (preEle == nums[i]) {
                    continue
                } else {
                    preEle = nums[i]
                }
            }
            //开始处理当前节点
            path.push(nums[i])
            //保存一个结果
            result.push(path.slice())
            //进行下一层检索
            helper(i + 1, right)
            //恢复路径
            path.pop()
        }
    }
    helper(0,nums.length - 1)
    return result
};

subsetsWithDup(
    [1,2,2]
)
    