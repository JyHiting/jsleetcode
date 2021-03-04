//从顶向下思考，从下向上递推状态
//从状态集合中做出抉择产生新的状态
var minCostClimbingStairs = function (cost) {
    //dptable含义：到下标为i的台阶需要的最小花费，第i阶台阶的花费可不能算
    let dptable = []
    for (let i = 0; i <= cost.length; i++) {
        if (i == 0) {
            //选择第0台阶开始
            dptable[i] = 0
        } else if (i == 1) {
            //选择第1台阶开始
            dptable[i] = 0
        } else {
            dptable[i] = Math.min(dptable[i - 1] + cost[i - 1], dptable[i - 2] + cost[i - 2])
        }
    }
    return dptable[cost.length]
};
minCostClimbingStairs([0, 1, 1, 1])