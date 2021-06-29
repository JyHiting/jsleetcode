var generateTrees = function (n) {
    let result = [], path = []
    let helper = () => {
        if (condition) {

        }
    }
};


//53
var maxSubArray = function (nums) {

    let table = new Array(nums.length), result = nums[0]
    for (let i = 0; i < nums.length; i++) {

        let curNum = nums[i]
        if (i == 0) {
            table[i] = curNum
        } else {
            //针对当前的数字curNum让我们针对它有两种决策
            //1.以curNum为结尾 2.curNum单独为一个序列
            table[i] = Math.max(table[i - 1] + curNum, curNum)
        }
        result = Math.max(result, table[i])
    }
    return result
};
//70
var climbStairs = function (n) {

    let table = new Array(n + 1)
    for (let i = 0; i < table.length; i++) {
        if (i == 0) {
            table[i] = 1
        } else if (i == 1) {
            table[i] = 1
        } else {
            table[i] = table[i - 1] + table[i - 2]
        }
    }
    return table[n]
};
//121
//抽取一些因变量作为状态，观察状态与状态之间的关系，找到这种关系即为状态转移方程
var maxProfit = function (prices) {
    let table = new Array(prices.length)
    for (let i = 0; i < table.length; i++) {
        let arr = new Array(2)
        table[i] = arr
    }
    for (let i = 0; i < table.length; i++) {
        if (i == 0) {
            table[i][0] = 0
            table[i][1] = -prices[i]
        } else {
            //当前没有股票的状态可能从：昨天就没有直接转化过来或者昨天有今天给卖了
            table[i][0] = Math.max(table[i - 1][0], table[i - 1][1] + prices[i])
            //当前有股票的状态可能从：昨天就有直接转化过来或者昨天没有今天买了
            table[i][1] = Math.max(table[i - 1][1], -prices[i])
        }
    }
    return table[prices.length - 1][0]
};

//392
var isSubsequence = function (s, t) {

    let table = new Array(s.length + 1)
    for (let i = 0; i < table.length; i++) {
        let arr = new Array(t.length + 1)
        table[i] = arr
    }
    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j <= t.length; j++) {
            if (i == 0 || j == 0) {
                table[i][j] = 0
            } else {
                if (s[i - 1] == t[j - 1]) {
                    table[i][j] = table[i - 1][j - 1] + 1
                } else {
                    table[i][j] = Math.max(table[i - 1][j], table[i][j - 1])
                }
            }
        }
    }
    return table[s.length][t.length] == s.length
};

// "abc"
// "ahbgdc"
isSubsequence("abc", "ahbgdc")


// class Solution {


//     public boolean isSubsequence(String s, String t) {

//         int n = s.length();
//         int m = t.length();
//         if (n > m) return false;

//         int[][] dp = new int[m + 1][n + 1];
//         for (int i=1;i<=m;i++) {

//             for (int j=1;j<=n;j++) {

//                 if (t.charAt(i - 1) == s.charAt(j - 1)) {

//                     dp[i][j] = dp[i - 1][j - 1] + 1;
//                 } else {

//                     dp[i][j] = dp[i - 1][j];
//                 }
//             }
//         }
//         if (dp[m][n] == n) return true;
//         else return false;
//     }
// }


