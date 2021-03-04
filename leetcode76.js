
var minWindow = function (s, t) {
    let window = new Map()
    let need = new Map()
    for (let i = 0; i < t.length; i++) {
        let letter = t[i]
        need.set(letter, 1)
        if (need.has(letter)) {
            let num = need.get(letter)
            num++
            need.set(letter, num)
        } else { 
            need.set(letter,1)
        }
    }
    let left = 0, right = 0, valid = 0
    let start = 0,len = s.length+1
    while (right < s.length) {
        
        let c = s[right]
        if (need.has(c)) {
            if (window.has(c)) {
                let num = window.get(c)
                num++
                window.set(c, num) 
            } else { 
                window.set(c,1)
            }
            if (window.get(c) <= need.get(c)) {
                valid ++
            }
        }
        right++

        while (valid == t.length) {
            if (right - left < len) {
                start = left
                len = right -left
            }
            let c = s[left]
            if (need.get(c)) {
                if (window.get(c) == need.get(c)) {
                    valid--
                }
                let num = window.get(c)
                num--
                window.set(c,num)
            }
            left ++
        }
    }
    if (len > s.length) {
        return ""
    }
    return s.slice(start,start+len)
};

let tmp = minWindow("aa", "aa")
console.log(66);