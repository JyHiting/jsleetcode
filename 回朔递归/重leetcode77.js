/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

    let result = [], path = []
    let backtrack = (begin) => {

        if (path.length == k) {
            result.push(path.slice(0))
            return
        }
        for (let i = begin; i < n; i++) {
            let num = i + 1
            path.push(num)
            backtrack(i + 1)
            path.pop()
        }
    }
    backtrack(0)
    return result
};