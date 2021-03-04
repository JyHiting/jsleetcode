//定长窗口
var findAnagrams = function (s, p) {
    let result = []
    let left = 0, right = 0
    //记录窗口中字符情况
    let wmap = new Map()
    //记录p串中字符情况
    let pmap = new Map()
    //初始化
    for (let i = 0; i < p.length; i++) {
        const ele = p[i];
        addmapnum(ele, pmap)
    }
    //循环控制窗口移动
    while (right < s.length) {
        let rightLetter = s[right]
        addmapnum(rightLetter, wmap)
        //在窗口长度等于p串长度的时候就要考虑
        //判断这个时候窗口中字符串是否符合题意了
        if (right - left + 1 == p.length) {
            if (check(wmap, pmap)) {
                result.push(left)
            }
            submapnum(s[left], wmap)
            left++
            right++
        } else {
            right++
        }
    }
    return result
};

//校验窗口中字符串和p串的匹配情况是否符合题意
function check(map1, map2) {
    for (const [key1, val1] of map2) {
        if (map1.has(key1)) {
            if (map1.get(key1) != val1) {
                return false
            }
        } else {
            return false
        }
    }
    return true
}

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

findAnagrams('cbaebabacd', 'abc')