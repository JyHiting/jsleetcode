/**
 * @param {string} s
 * @return {boolean}
 */
//双指针
var isPalindrome = function (s) {
    let left = 0, right = s.length - 1
    while (left < right) {
        while (left < s.length) {
            if (isLetterOrNumber(s[left].toLowerCase())) {
                break
            }
            left++
        }
        while (right >= 0) {
            if (isLetterOrNumber(s[right].toLowerCase())) {
                break
            }
            right--
        }
        if (left < right) {
            if (s[left].toLowerCase() === s[right].toLowerCase()) {
                left++
                right--
            }
            else {
                return false
            }
        }
    }
    return true
 };
function isLetterOrNumber(char) {
    if ((char >='a'&& char <= 'z') || (char >='A'&& char <= 'Z') || ['0','1','2','3','4','5','6','7','8','9'].includes(char)) {
        return true
    }
    return false
}

isPalindrome('.,')
