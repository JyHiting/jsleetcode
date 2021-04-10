/**
 * @param {number[]} numbers
 * @return {number}
 */
//此类题首先想到在数组内有一个拐点
var minArray = function (numbers) {
    let left = 0, right = numbers.length - 1
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (numbers[mid] > numbers[right]) {
            //此种情况拐点一定在mid右边
            left = mid + 1
        } else if (numbers[mid] < numbers[right]) {
            //此种情况拐点一定在mid左边或者是mid（所以不能mid-1）
            right = mid
        } else {
            //此种情况有点复杂，我不能断定拐点在mid左还是右
            //我如果断定在左的话，可以举一个例子推翻：2，2，2，2，5，1，2，2
            //我如果断定在右的话，可以举一个例子推翻：2，2，2，2，5，2，2
            //那么此时此刻我能做啥？
            //我把right缩小1，缩小一个范围继续搜索，因为我能保证我缩小这1个范围之后要找的结果还在区间内
            right--
        }
    }
    return numbers[left]
};

minArray([3, 1, 3])

