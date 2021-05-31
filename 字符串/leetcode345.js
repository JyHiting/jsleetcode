
//元音字母：a e i o u
var reverseVowels = function (s) {

    if (s.length == 0 || s == null) {
        return s
    }
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let sArr = [], arr = []
    for (let idx = 0; idx < s.length; idx++) {
        let char = s[idx]
        sArr.push(char)
        if (set.has(char)) {
            //元音字母
            //记录下标
            arr.push(idx)
        }
    }
    let left = 0, right = arr.length - 1
    while (left < right) {
        let tmp = sArr[arr[left]]
        sArr[arr[left]] = sArr[arr[right]];
        sArr[arr[right]] = tmp
        left++
        right--
    }

    //arr to string
    let result = sArr.reduce((aStr, char) => {
        return aStr + char
    }, "")

    return result
};

reverseVowels("hello")

