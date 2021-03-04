//暴力解法就不考虑了
var nextGreaterElement = function (nums1, nums2) {
    let result = []
    let stack = []
    let map = new Map()
    for (let i = nums2.length - 1; i >= 0; i--) {
        const cur = nums2[i];
        while (stack.length != 0 && stack[stack.length - 1] <= cur) {
            stack.pop()
        }
        if (stack.length == 0) {
            map.set(cur, -1)
        } else {
            map.set(cur, stack[stack.length - 1])
        }
        stack.push(cur)
    }
    for (let i = 0; i < nums1.length; i++) {
        const ele = nums1[i];
        result.push(map.get(ele))
    }
    return result
};