//动态规划的思路是在647动态规划解题思路之上加一个记录当前最长回文串的变量
//下面可优化的点：不必每次记录最长字符串，记录下标即可
//dptable也不是需要全部填满的表格
// var longestPalindrome = function (s) {
//     //创建二维数组作为备忘录
//     let dpTable = new Array(s.length)
//     for (let i = 0; i < s.length; i++) {
//         let arr = new Array(s.length).fill(false)
//         dpTable[i] = arr
//     }
//     let maxS = ""
//     for (let j = 0; j < s.length; j++) {
//         for (let i = 0; i <= j; i++) {
//             if (i == j) {
//                 //一个字母不用说最大长度为1
//                 //是回文串
//                 dpTable[i][j] = true
//                 maxS = maxS.length < 1 ? s[i] : maxS
//             } else if (j - i == 1) {
//                 //两个字母要分情况了
//                 //此串是回文串最大长度就为2
//                 if (s[i] == s[j]) {
//                     dpTable[i][j] = true
//                     let subS = s.slice(i, j + 1)
//                     maxS = maxS.length < 2 ? subS : maxS
//                 } else {
//                     dpTable[i][j] = false
//                 }
//             } else {
//                 //串的长度>=3的情况
//                 if (s[i] == s[j] && dpTable[i + 1][j - 1]) {
//                     //是回文串
//                     dpTable[i][j] = true
//                     let subS = s.slice(i, j + 1)
//                     maxS = maxS.length < subS.length ? subS : maxS
//                 } else {
//                     dpTable[i][j] = false
//                 }
//             }
//         }
//     }
//     return maxS
// };


longestPalindrome('cbbd')