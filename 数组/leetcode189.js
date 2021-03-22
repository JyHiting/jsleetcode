/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//一次一个多次原地移动
var rotate = function (nums, k) {

    let count = k % nums.length, begin = 0
    while (count != 0) {
        let last = nums[nums.length - 1]
        let end = nums.length - 2
        while (end >= 0) {
            nums[end + 1] = nums[end]
            end--
        }
        nums[0] = last
        count--
    }
};

rotate([1, 2, 3, 4, 5, 6, 7], 3)