/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    //count可以删除字母的次数
    let left = 0, right = s.length - 1, count = 1
    while (left < right) {
        if (s[left] != s[right]) {
            //如果发现left，right指向的字母不相等就默认使用count的次数调过继续下个迭代比较
            //跳过此时的left还是right都可以我这边先跳过当前的left下一个while循环跳过right
            if (count > 0) {
                left++
                count--
            } else {
                count--
                break
            }
        } else {
            left++
            right--
        }
    }
    if (count < 0) {
        count = 1, left = 0, right = s.length - 1
        while (left < right) {
            if (s[left] != s[right]) {
                if (count > 0) {
                    right--
                    count--
                } else {
                    return false
                }
            } else {
                left++
                right--
            }
        }
    }
    return true
};

validPalindrome("abc")