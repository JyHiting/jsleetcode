/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//回朔下面没做优化会超时
var combinationSum4 = function (nums, target) {
    let helper = (value) => {
        if (value == 0) {
            return 1
        } else if (value < 0) {
            return 0
        }
        let count = 0
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            count += helper(value - num)
        }
        return count
    }
    let result = helper(target)
    return result
};

//回朔，备忘录剪枝优化一下
var combinationSum4 = function (nums, target) {

    let record = new Map()
    let helper = (value) => {
        if (value == 0) {
            return 1
        } else if (value < 0) {
            return 0
        }
        //如果有记录value的值就直接拿出来用
        if (record.has(value)) {
            return record.get(value)
        }
        let count = 0
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            count += helper(value - num)
        }
        //如果没有记录value的值就在计算完毕之后保存
        record.set(value, count)
        return count
    }
    let result = helper(target)
    return result
};

//动态规划
var combinationSum4 = function (nums, target) {

    let table = new Array(target + 1).fill(0)
    table[0] = 1
    for (let i = 0; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            const num = nums[j];
            //我的目标是找target为i的结果数
            //如果i < num ,那么我选择此时此刻的num是无意义的
            //因为一个num就超过了i那么就说明我选择了此时的num
            //之后就找不到满足意义的组合
            if (i >= num) {
                table[i] += table[i - num]
            }

        }
    }
    return table.pop()
};

combinationSum4([1, 2, 3], 4)