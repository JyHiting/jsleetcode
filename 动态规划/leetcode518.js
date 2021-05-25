
//完全背包
//观察发现一些变量因子，这些变量因子就是我们在每一阶段做决策要依据的因素
//动态规划思考的时候要从上到下的角度，状态转移方程编写是从下到上
var change = function (amount, coins) {

    //dptable 含义：从前i个硬币中选择一些硬币是的额度为j的组合
    let dptable = new Array(coins.length + 1)
    for (let i = 0; i < dptable.length; i++) {
        let arr = new Array(amount + 1)
        dptable[i] = arr
    }
    for (let i = 0; i < dptable.length; i++) {
        for (let j = 0; j < dptable[0].length; j++) {
            if (i == 0) {
                //i==0 0个硬币凑指定金额
                if (j == 0) {
                    //0个硬币凑0金额组合为1
                    dptable[i][j] = 1
                } else {
                    //0个硬币凑不为0的金额组合永远不可能
                    dptable[i][j] = 0
                }
            } else {
                //i!=0的情况下
                //从前i个硬币中选，凑够金额为j
                //站在这个点上的决策是：当前的第i个硬币我不用，那么我从第i-1个硬币中找到满足
                //金额为j的的数量和我选第i个硬币的前提下满足j - coins[i - 1]的金额的组合（可能没有）
                if (j - coins[i - 1] >= 0) {
                    dptable[i][j] = dptable[i - 1][j] + dptable[i][j - coins[i - 1]]
                } else {
                    dptable[i][j] = dptable[i - 1][j]
                }
            }
        }
    }
    return dptable[dptable.length - 1][dptable[0].length - 1]
};

