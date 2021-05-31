
//前缀和思想
var countTriplets = function (arr) {

    let prefixArr = new Array(arr.length + 1).fill(0)
    for (let idx = 1; idx <= arr.length; idx++) {
        prefixArr[idx] = prefixArr[idx - 1] ^ arr[idx - 1]
    }

    let i = 0, result = 0
    while (i <= arr.length) {
        let j = i + 1
        while (j <= arr.length) {
            let k = j
            while (k <= arr.length) {
                if (prefixArr[j - 1] ^ prefixArr[i - 1] == prefixArr[k] ^ prefixArr[j - 1]) {
                    result++
                }
                k++
            }
            j++
        }
        i++
    }
    return result
};
