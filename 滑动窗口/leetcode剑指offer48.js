/**
 * @param {string} s
 * @return {number}
 */
//滑动窗口
var lengthOfLongestSubstring = function (s) {
    let left = 0, right = 0
    let map = new Map()
    let maxLen = 0
    while (right < s.length) {
        let rWord = s[right]
        if (map.has(rWord)) {
            let count = map.get(rWord)
            count++
            map.set(rWord,count)
        } else {
            map.set(rWord,1)
        }
        if (map.size < right - left + 1) {
            //有重复字母
            //开始收缩left,使满足题意
            while (true) {
                let lWord = s[left]
                let count = map.get(lWord)
                left++
                count--
                if (count === 0) {
                    map.delete(lWord)
                } else {
                    //找到那个重复的字符了
                    //退出
                    map.set(lWord, count)
                    break
                }
                
            }
        }
        maxLen = Math.max(maxLen, map.size)
        right++
    }
    return maxLen
};

//动态规划
var lengthOfLongestSubstring = function (s) {
    //dptable标识以i结尾的最大子串长度
    let dptable = [],max = 0
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (i == 0) {
            dptable[i] = 1
        } else {
            //每次到第i个字母的时候就要从i-1处向前遍历找第一个和i相同的字母，
            //a bcdef a a和a之间加+1就是以i结尾串最大长度
            dptable[i] = dptable[i - 1] + 1
            let count = dptable[i - 1],flag = i - 1
            while (count != 0) {
                if (s[i] === s[flag]) {
                    dptable[i] = i - flag
                    break
                }
                count--
                flag--
            }
        }
        max = Math.max(max,dptable[i])
    }
    return max
};



lengthOfLongestSubstring("abcabcbb")//3