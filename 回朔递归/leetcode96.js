
//递归但是超时
var numTrees = function (n) {

    let helper = (begin, end) => {
        if (begin > end) {
            return 1
        }
        let count = 0
        for (let i = begin; i <= end; i++) {
            let val1 = helper(begin, i - 1)
            let val2 = helper(i + 1, end)
            count += val1 * val2
        }
        return count
    }
    let result = helper(1, n)
    return result
};
//记忆化递归优化
var numTrees = function (n) {

    let map = new Map()//备忘录
    let helper = (begin, end) => {
        if (begin > end) {
            return 1
        }
        if (map.has(`${begin}${end}`)) {
            //备忘录中有直接用
            return map.get(`${begin}${end}`)
        }
        let count = 0
        for (let i = begin; i <= end; i++) {
            let val1 = helper(begin, i - 1)
            let val2 = helper(i + 1, end)
            count += val1 * val2
        }
        //备忘录中没有记录
        map.set(`${begin}${end}`, count)
        return count
    }
    let result = helper(1, n)
    return result
};

//动态规划
var numTrees = function (n) {
    let table = new Array(n + 1).fill(0)
    table[0] = 1
    table[1] = 1
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j <= i - 1; j++) {
            // 左右子树符合题意的二叉搜索树的数量积
            // table[i - 1 - j]右子树，这里要理解，区间4，5，6 和 1，2，3的
            // 二叉搜索树的数量是一样的不在乎你是谁
            table[i] += table[j] * table[i - 1 - j]
        }
    }
    return table.pop()
};

numTrees(3)

