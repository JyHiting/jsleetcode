var nextGreaterElement = function (nums1, nums2) {
    let record = new Map()
    let stack = []
    //把nums2中每个元素下一个比其大的值缓存下来
    //然后遍历nums1找对应结果
    nums2.forEach((item,idx) => {
        if (idx == 0) {
            stack.push(item)
        } else { 
            //stack中有值就从后向前遍历该stack
            //下面循环遍历的逻辑是stack必须有值且栈顶元素小于当前元素
            while (stack.length != 0 && item > stack[stack.length - 1]) {
                record.set(stack.pop(), item)
            }
            stack.push(item)
        }
    });
    let result = []
    nums1.forEach((item,idx) => {
        if (record.has(item)) {
            result.push(record.get(item))
        } else { 
            result.push(-1)
        }
    });
    return result
};
nextGreaterElement([4,1,2],[1,3,4,2])