//此题转化为0-1背包问题
//能不能用dp算法求解看是否满足一个模型三个特点，三个特点中，无后效性满足优先级很低
//dp算法就是观察数据，找到一些状态，然后观察这些状态，然后推演状态与状态的递推逻辑
//其实就是相当于上帝视角，已经知道了结果，但是要找一个种关系利用这种关系从一开始开
//始推演出结果，结果就摆在在，上帝视角的话你是知道的，然后找到规则，并把这些规则给
//不知道的人让他按你的规则行事就行，比喻就是：开天眼发现金钥匙，然后闭眼装着不知道
//利用金钥匙一步一步走就行了，就能水到渠成
//同一个问题状态的建立可能不一样，不一定一定是某个状态，一个问题思考的角度不同我们
//发现的状态就不同，状态之间的联系也不同，你建立的状态的模型不同会导致你解决问题的
//复杂度不一样（甚至是错误导致你找不到转移方程（金钥匙））
var canPartition = function (nums) {
    let sum = nums.reduce((sum, curVal) => {
        return sum + curVal
    })
    if (sum % 2 == 1) {
        //奇数，肯定不符合题意
        return false
    }
    let num = sum / 2
    let dpTable = new Array(nums.length)
    for (let i = 0; i < dpTable.length; i++) {
        let arr = new Array(num + 1).fill(false)
        dpTable[i] = arr
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j <= num; j++) {
            if (i == 0) {
                //初始情况
                dpTable[i][j] == false
            } else {
                if (dpTable[i - 1][j]) {
                    //i-1数组内能挑选出来几个和为j的元素，那么i数组内不用说就可以
                    dpTable[i][j] = true
                } else {
                    //i-1数组内不能挑选出来几个满足条件的元素，那么就要分情况看
                    if (nums[i] == j) {
                        //第i个元素直接就等于j了不用说可定能满足条件了
                        dpTable[i][j] = true
                    } else if (nums[i] < j) {
                        //第i个元素小于j了又要分情况讨论抉择肯能找到符合条件的元素不
                        if (dpTable[i - 1][j - nums[i]]) {
                            dpTable[i][j] = true
                        } else {
                            dpTable[i][j] = false
                        }
                    } else {
                        //i大于j不用说我选择或者不选择i元素，能不能找到满足条件的元素就看从i-1内能找到不
                        dpTable[i][j] = dpTable[i - 1][j]
                    }
                }
            }
        }
    }
    return dpTable[nums.length - 1][num]
};

let arr = [1, 2, 3, 4, 5, 6, 7]
canPartition(arr)