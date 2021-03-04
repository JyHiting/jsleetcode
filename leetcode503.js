//和上一题一样，不一样就是有个收尾详解，循环的时候扩充循环次数，填值
//的时候转为真实下标
var nextGreaterElements = function (nums) {
    let stack = []
    let result = new Array(nums.length).fill(-1)
    for (let i = 0; i < nums.length * 2; i++) {
        let curEle = nums[i % nums.length]
        let topEle = nums[stack[stack.length - 1]]
        while (curEle > topEle && stack.length != 0) {
            result[stack.pop()] = curEle
            topEle = nums[stack[stack.length - 1]]
        }
        stack.push(i%nums.length)
    }
    return result
};

nextGreaterElements([1,2,1])