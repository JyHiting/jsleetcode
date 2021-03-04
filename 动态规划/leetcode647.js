//动态规划
//关键字，记忆，最优子结构，无后效性，重叠子问题
//有了重叠子问题才能发挥备忘录的作用（避免重复计算）
//也即动态规划的一个关键点：记忆性
var countSubstrings = function (s) {
    let dbTable = new Array(s.length)
    for (let i = 0; i < s.length; i++) {
        let arr = new Array(s.length).fill(false)
        dbTable[i] = arr
    }
    let nums = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (j == i) {
                //一个元素的字串不用说就是回文串
                dbTable[j][i] = true
                nums++
            } else if (i - j == 1) {
                //二个元素的字符串
                //判断是否相等即可判定该字符串是否为回问字符串
                if (s[i] == s[j]) {
                    dbTable[j][i] = true
                    nums++
                } else {
                    dbTable[j][i] = false
                }
            } else {
                //子串长度>=3的情况就具有通用性了这也是我们考虑状态方程的点
                //随便拿出来一个子串比如"abcd"判断该字串是否回文，最直观的
                //思考方式就是首尾设置指针开始判断是否符合回文的特性，一个一个字母
                //比较，但是别忘了我们一开始已经建立了备忘录，已经知道的的结果
                //我直接用即可不需要再计算比较一次，比如我们只需要查找备忘录中已经有的
                //子结果"bc"是不是是已经计算出来了，"bc"已经知道了那么首尾各加一个字母不就是
                //建立在"bc"的结果上判断一下首尾是否相同
                if (s[i] == s[j] && dbTable[j + 1][i - 1]) {
                    dbTable[j][i] = true
                    nums++
                } else {
                    dbTable[j][i] = false
                }
            }
        }
    }
    return nums
};


//测试
let s = "abca"
countSubstrings(s)