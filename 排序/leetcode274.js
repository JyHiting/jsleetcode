/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a,b) => {
        return a - b
    })
    let len = citations.length,result = 0
    for (let i = len - 1; i >= 0; i--) {
        if (citations[i] >=(len - 1 - i + 1)) {
            result = (len - 1 - i + 1)
        }
    }
    return result
};


hIndex([1, 3, 1])

0123456

