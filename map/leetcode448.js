//利用map
var findDisappearedNumbers = function (nums) {
    let map = new Map()
    nums.forEach(ele => {
        map.set(ele, 1)
    });
    let result = []
    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) {
            result.push(i)
        }
    }
    return result
};

//利用原数组作为数据载体
//利用原数组作为我们承装信息的载体的前提是：找到一种逻辑使得我们
//在使用原数组的数据的时候还能还原回来原来的数据信息
var findDisappearedNumbers = function (nums) {
    let result = []
    nums.forEach((item, idx, arr) => {
        if (arr[Math.abs(item) - 1] > 0) {
            arr[Math.abs(item) - 1] = arr[Math.abs(item) - 1] * (-1)
        }
    });
    nums.forEach((item, idx) => {
        if (item > 0) {
            result.push(idx + 1)
        }
    });
    return result
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])