/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//根据题意利用已有空间做存储
var merge = function (nums1, m, nums2, n) {

    let nums1Last = m - 1, nums2Last = n - 1, curIdx = m + n - 1
    while (nums2Last >= 0) {
        if (nums1[nums1Last] > nums2[nums2Last]) {
            nums1[curIdx] = nums1[nums1Last]
            nums1Last--
        } else {
            nums1[curIdx] = nums2[nums2Last]
            nums2Last--
        }
        curIdx--
    }
    return nums1.length
};

merge(nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3)
