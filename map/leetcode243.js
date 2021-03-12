/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
//map统计分析比较
var shortestDistance = function (wordsDict, word1, word2) {
    let map = new Map()
    wordsDict.forEach((word,idx,arr) => {
        if (map.has(word)) {
            let words = map.get(word)
            words.push(idx)
            map.set(word,words)
        } else {
            let words = [idx]
            map.set(word,words)
        }
    });
    let min = wordsDict.length
    let arr1 = map.get(word1)
    let arr2 = map.get(word2)
    for (let i = 0; i < arr1.length; i++) {
        let w1 = arr1[i]
        for (let j = 0; j < arr2.length; j++) {
            let w2 = arr2[j]
            min = Math.min(min,Math.abs(w1 - w2))
        }
    }
    return min
};

//单指针记录上一个word1或者word2比较下一个word1或者word2，然后移动该指针
var shortestDistance = function (wordsDict, word1, word2) {
    let preWordIdx = -1,min = wordsDict.length
    for (let i = 0; i < wordsDict.length; i++) {
        let curWord = wordsDict[i]
        if (curWord == word1 || curWord == word2) {
            if (preWordIdx == -1) {
                preWordIdx = i
            } else {
                if (curWord == wordsDict[preWordIdx]) {
                    preWordIdx = i
                } else {
                    min = Math.min(min, i - preWordIdx)
                    preWordIdx = i
                }
            }
        }
    }
    return min
};


shortestDistance(["practice", "makes", "perfect", "coding", "makes"],"makes","coding")