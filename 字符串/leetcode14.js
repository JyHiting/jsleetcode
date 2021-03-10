/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let minStr = ""
    strs.forEach((str) => {
        if (minStr == "") {
            minStr = str
        } else {
            if (str.length < minStr.length) {
                minStr = str
            }
        }
    });
    //找到最小字符串
    let result = minStr.slice()
    //从最小字符串开始一一匹配各个字符串看是否满足题意
    //不满足就缩小result继续匹配
    while (true) {
        let isOk = true
        for (let i = 0; i < strs.length; i++) {
            let ele = strs[i]
            if (!ele.startsWith(result)) {
                isOk = false
                break
            }
        }
        if (!isOk) {
            result = result.slice(0,result.length - 1)
        } else {
            break
        }
    }
    return result
};

longestCommonPrefix(["flower","flow","flight"])