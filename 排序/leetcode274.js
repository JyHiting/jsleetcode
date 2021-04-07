/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a,b) => {
        return a - b
    })
    let len = citations.length, result = 0
    //此题一开始有误解，我以为只有一个符合调节的h
    //实际是可能有多个取最小的
    for (let i = len - 1; i >= 0; i--) {
        if (citations[i] >=(len - 1 - i + 1)) {
            result = (len - 1 - i + 1)
        }
    }
    return result
};


// hIndex([1, 3, 1])







