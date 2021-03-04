
var checkInclusion = function (s1, s2) {
    //用来记录s1中字母出现的个数（可能重复出现同一个字母）
    let s1map = new Map()
    //用来记录我们的滑动窗口中字母出现个数（可能同一个字母不相连或者相连出现好多次）
    let wmap = new Map()
    //初始化一下s1字符串的情况（好知道这个串都出现了哪些字母，每一个字母出现的次数）
    for (let i = 0; i < s1.length; i++) {
        const letter = s1[i]
        addmapnum(letter, s1map)
    }
    //该变量用来标记我的滑动窗口在滑动的过程中，窗口中记录的字符是不是已经包含了s1中所有字符
    let discovered = 0
    //滑动窗口的首位
    let left = 0, right = 0
    //开始移动right的循环，right不停移动，直到left和right区间内包含了所有s1中的字符情况
    while (right < s2.length) {
        let letter = s2[right]
        //wmap记录窗口字符的出现情况++
        addmapnum(letter, wmap)
        //当前字符在s1中就要注意了
        if (s1map.has(letter)) {
            //当前字符在s1中那么就要考虑我们的discovered
            //letter是s1中的字符，那么在wmap中出现的次数
            //是不是和在s1map中出现的一样，一样就表示此种
            //字符在窗口中已经发现完了符合了（一个字符在s1中）
            //可能出现好多次
            if (wmap.get(letter) == s1map.get(letter)) {
                discovered++
            }
        }
        right++
        //好，窗口中字符已经包含了所有s1中的字符情况
        //开始关注left的移动
        while (discovered == s1map.size) {
            //窗口已经包含了s1中的字符且长度和s1一样
            //不用说，符合题意
            if (s1.length == (right - left)) {
                return true
            } else {
                //走到这里肯定窗口的元素集合大于s1
                //要开始移动left缩小范围
                let letter = s2[left]
                //移动left的过程中发现当前字符在s1中
                if (s1map.has(letter)) {
                    //由于我的left要移动到下个位置了
                    //窗口在变小，这次循环结束这个字符
                    //在wmap中出现的次数就少一次了
                    submapnum(letter, wmap)
                    //left一次一次的移动，发现当前left所处的位置的元素
                    //在wmap中出现的次数小于在s1map中出现的次数了那么说明
                    //这次循环一结束，left移到下个位置，窗口变小之后
                    //那么在变动后的新窗口中letter的出现情况已经不满足了
                    if (wmap.get(letter) < s1map.get(letter)) {
                        //一旦discovered不满足就进入right的移动继续让窗口满足：
                        //包含s1中所有的字符
                        discovered--
                    }
                }
                left++
            }
        }
    }
    return false
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

checkInclusion("ab", "eidbaooo")