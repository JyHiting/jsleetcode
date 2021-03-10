/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {

    let left = 0, right = 0, max = 0
    let map = new Map()
    while (right <= s.length - 1) {
        
        let letter = s[right]
        if (map.has(letter)) {
            let count = map.get(letter)
            count++
            map.set(letter,count)
        } else {
            map.set(letter,1)
        }
        //map中记录中的字母如果大于k
        //那么就移动left缩小窗口使得窗口符合题意
        while (map.size > k) {
            let letter = s[left]
            let count = map.get(letter)
            count--
            if (count == 0) {
                map.delete(letter)
            } else {
                map.set(letter,count)
            }
            left++
        }
        //找到符合题意的的就比较找出max
        max = Math.max(max, right - left + 1)
        right++
    }
    return max
};

lengthOfLongestSubstringKDistinct("ccaabbb", 2)
