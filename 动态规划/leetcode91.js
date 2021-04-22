/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {

    let map = new Map()
    for (let i = 0; i < 26; i++) {
        map.set(`${i + 1}`, String.fromCharCode(65 + i))
    }
    //动态规划table的含义：数组下表i表示从0到第i个字符的时候的编码总数
    let table = new Array(s.length + 1).fill(0)
    for (let i = 0; i < table.length; i++) {
        if (i == 0) {
            table[i] = 0
        } else if (i == 1) {
            if (map.has(s[i - 1])) {
                table[i] = 1
            }
        } else {
            //判断条件只判断当前字符，当前和前一个字符组合，当前和前前一个字符组合...很多
            //但是题目隐形有个条件，不能大于2个字符的组合，如果大于2的话首尾如果不为0那么
            //组成的数字字符是不能映射为任何字母的，A到Z就是1到26在100以内的数字
            let letter = s[i - 1]
            let preletter = s[i - 2]
            let count = 0
            if (map.has(letter)) {
                count += table[i - 1]
            }
            if (preletter !== '0' && map.has(preletter + letter)) {
                if (i - 2 == 0) {
                    count += 1
                } else {
                    count += table[i - 2]
                }
            }
            table[i] = count
        }
    }
    return table.pop()
};




