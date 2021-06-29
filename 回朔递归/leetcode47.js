/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {

    nums.sort((a, b) => {
        return a - b
    })

    //used记录路径上已经使用过的节点
    let result = [], path = [], used = new Array(nums.length).fill(0)

    let backtrack = () => {
        if (path.length == nums.length) {
            result.push(path.slice(0))
            return
        }
        //map记录当前已经决策过的可能选择，剪枝掉不需要再做选择
        let map = new Map()
        for (let i = 0; i < nums.length; i++) {
            if (used[i] == 1) {
                continue
            } else {
                let num = nums[i]
                if (map.has(num)) {
                    continue
                } else {
                    map.set(num, 1)
                    used[i] = 1

                    path.push(num)
                    backtrack()
                    path.pop()
                    used[i] = 0
                }
            }
        }

    }
    backtrack()
    return result
};

permuteUnique([1, 1, 2])