var minWindow = function (s, t) {
    let tmap = new Map()
    let wmap = new Map()
    for (let i = 0; i < t.length; i++) {
        let letter = t[i]
        addmapnum(letter, tmap)
    }

    let left = 0, right = 0
    let discovered = 0

    let begin = 0, len = s.length + 1
    while (right < s.length) {
        let letter = s[right]
        addmapnum(letter, wmap)
        let num1 = tmap.get(letter)
        let num2 = wmap.get(letter)
        if (num2 == num1) {
            discovered++
        }
        right++
        while (discovered == tmap.size) {
            let letter = s[left]
            if (right - left < len) {
                begin = left
                len = right - left
            }
            if (tmap.has(letter)) {
                submapnum(letter, wmap)
                let num1 = tmap.get(letter)
                let num2 = wmap.get(letter)
                if (num2 < num1) {
                    discovered--
                }
            }
            left++
        }
    }
    if (len == s.length + 1) {
        return ""
    }
    return s.slice(begin, begin + len)
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

minWindow("a", "aa")