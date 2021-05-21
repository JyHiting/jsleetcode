
//暴力遍历
var strStr = function (haystack, needle) {

    if (needle.length == 0) {
        return 0
    }

    for (let i = 0; i < haystack.length; i++) {
        for (let j = 0; j < needle.length; j++) {
            let char1 = haystack[i + j]
            let char2 = needle[j]
            if (char1 == char2) {
                if (j == needle.length - 1) {
                    return i
                }
                continue
            }
            break
        }
    }
    return -1
};

//KMP算法
var strStr = function (haystack, needle) {

    if (needle.length == 0) {
        return 0
    }
    //构建next数组
    //next数组是针对匹配串的而不是针对主串的
    const nextArr = new Array(needle.length).fill(0)

    let maxK = 0
    for (let i = 1, j = 0; i < needle.length; i++) {

        while (maxK > 0 && needle[maxK] != needle[i]) {
            maxK = nextArr[maxK - 1]
        }
        if (needle[maxK] == needle[i]) {
            maxK++;
        }
        nextArr[i] = maxK;
    }

    let i = 0
    while (i < haystack.length) {
        let j = 0
        while (j < needle.length) {
            if (haystack[i] == needle[j]) {
                if (j == needle.length - 1) {
                    //找到位置符合题意
                    //此时的i是比较的和needle相等的字符的最后一个位置要做计算才是首坐标i - needle.length + 1
                    return i - needle.length + 1
                } else {
                    i++
                    j++
                    continue
                }
            } else {
                //当前位置字符串不相等
                if (j == 0) {
                    //开始比较的第一个就不相等
                    i++
                } else {
                    //这里才是和暴力求解的不同之处
                    //暴力求解是一次移动一个这里是一次移动好几个
                    i -= nextArr[j - 1]
                }
                break
            }
        }
    }
    return -1;
};

strStr("mississippi", "issip")

