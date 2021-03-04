var nextGreaterElements = function (nums) {
    let result = []
    let stack = []
    for (let i = 2 * nums.length - 1; i >= 0; i--) {
        const ele = nums[i % nums.length];
        while (stack.length != 0 && stack[stack.length - 1] <= ele) {
            stack.pop()
        }
        if (stack.length == 0) {
            result[i % nums.length] = -1
        } else {
            result[i % nums.length] = stack[stack.length - 1]
        }
        stack.push(ele)
    }
    return result
};