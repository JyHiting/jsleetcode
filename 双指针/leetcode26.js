/**
 * @param {number[]} nums
 * @return {number}
 */

//fast找到一个符合题意的数字然后移动到slow的位置，移动之后要保证
//slow位置的数字和slow-1处的位置不同才能符合题意
var removeDuplicates = function (nums) {
    if (nums < 2) {
        return nums.length
    }
    let slow = 1, fast = 1
    while (fast < nums.length) {
        if (nums[fast] != nums[slow - 1]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};