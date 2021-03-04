var lengthOfLongestSubstring = function (s) {
    //left，right记录窗口的首位
    let left = 0, right = 0, maxlen = 0
    //map记录窗口中字符出现的情况
    let map = new Map()
    //第一层循环的目的是不停的移动right使得窗口中的元素都是不同的元素
    while (right < s.length) {
        let letter = s[right]
        addmapnum(letter, map)
        //第二层窗口的目的是：在第一层窗口发现窗口中再进入一个元素就打破了窗口中的
        //元素各不相同的情况下，开始移动left直到窗口再次满足题意
        while (map.get(letter) > 1) {
            let letter = s[left]
            submapnum(letter, map)
            left++
        }
        maxlen = Math.max(maxlen, right - left + 1)
        right++
    }
    return maxlen
};

function addmapnum(letter, map) {
    if (map.has(letter)) {
        let num = map.get(letter)
        num++
        map.set(letter, num)
    } else {
        map.set(letter, 1)
    }
}
function submapnum(letter, map) {
    if (map.has(letter)) {
        let num = map.get(letter)
        num--
        map.set(letter, num)
    }
}

lengthOfLongestSubstring("abcabcbb")