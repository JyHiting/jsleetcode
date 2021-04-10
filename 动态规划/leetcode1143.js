/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let dptable = new Array(text1.length + 1)
    for (let i = 0; i <= text1.length; i++) {
        let arr = new Array(text2.length + 1)
        dptable[i] = arr
    }
    for (let i = 0; i < dptable.length; i++) {
        for (let j = 0; j < dptable[0].length; j++) {
            if (i == 0 || j == 0) {
                dptable[i][j] = 0
            } else {
                //动态转移方程
                if (text1[i - 1] == text2[j - 1]) {
                    dptable[i][j] = dptable[i - 1][j - 1] + 1
                } else {
                    dptable[i][j] = Math.max(dptable[i][j - 1], dptable[i - 1][j])
                }
            }
        }
    }
    return dptable[text1.length][text2.length]
};

longestCommonSubsequence("abcde", "ace")

