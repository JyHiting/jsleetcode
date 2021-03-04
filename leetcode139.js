//bfs超时
var wordBreak = function (s, wordDict) {
    let path = []
    let helper = (subStr) => {
        for (let i = 0; i < wordDict.length; i++) {
            let word = wordDict[i]
            if (subStr.startsWith(word)) {
                path.push(word)
                if (helper(subStr.slice(word.length))) {
                    return true
                }
                path.pop()
            }
        }
        if (path.join("") == s) {
            return true
        }
        return false
    }
    return helper(s)
};

//动态规划
var wordBreak = function (s, wordDict) {
    //s中到第i个元素的串长是否符合题意
    //状态table初始化多一个看需要如果不加1那么就需要在下面额外判断临界条件
    let dptable = new Array(s.length + 1).fill(false)
    dptable[0] = true
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            const word = wordDict[j]
            const stri = s.slice(0, i)
            //到i的字串是否有以word结尾的情况如果是，要判断除了这个单词之后
            //的串是否符合题意，二者都符合题意那么可以判定到第i个字符的串此时
            //符合题意
            if (stri.endsWith(word) && dptable[i - word.length]) {
                dptable[i] = true
                break
            }
        }
    }
    return dptable.pop()
};

wordBreak("dogs", ["dog", "s", "gs"])
