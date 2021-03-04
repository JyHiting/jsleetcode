var characterReplacement = function (s, k) {
    //map用来记录字母出现频次
    let map = new Map()
    //maxNum map中某个字母出现的最大次数
    let maxLen = 0, maxNum = 0, left = 0, right = 0
    while (right < s.length) {
        let letter = s[right]
        if (map.has(letter)) {
            let num = map.get(letter)
            num++
            map.set(letter, num)
        } else {
            map.set(letter, 1)
        }
        maxNum = Math.max(maxNum, map.get(letter))
        while (right - left + 1 - maxNum > k) {
            let letter = s[left]
            let num = map.get(letter)
            num--
            map.set(letter, num)
            maxNum = Math.max(maxNum, num)
            left++
        }
        //走到这里满足题意的一个集合
        maxLen = right - left + 1
        right++
    }
    return maxLen
};

characterReplacement("ABAB", 2)