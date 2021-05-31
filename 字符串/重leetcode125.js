var isPalindrome = function (s) {

    let left = 0, right = s.length - 1
    while (left < right) {

        if (check(s[left]) && check(s[right])) {
            if (s[left].toLowerCase() != s[right].toLowerCase()) {
                return false
            }
            left++
            right--
        }
        if (!check(s[left])) {
            left++
        }
        if (!check(s[right])) {
            right--
        }
    }
    return true
};
function check(aChar) {
    if (aChar >= 'a' && aChar <= 'z' || aChar >= 'A' && aChar <= 'Z' || aChar >= '0' && aChar <= '9') {
        return true
    }
    return false
}

isPalindrome("A man, a plan, a canal: Panama")