/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//回溯基本题
var subsets = function (nums) {
     
    let result = [[]],path = []
    let helper = (left) => {
        if (left >= nums.length) {
            return
        }
        for (let i = left; i < nums.length; i++) {

            path.push(nums[i])
            result.push(path.slice())
            helper(i + 1)
            path.pop()
        }
    }
    helper(0)
    return result
};