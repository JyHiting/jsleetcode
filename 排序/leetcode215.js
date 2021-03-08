var findKthLargest = function (nums, k) {
    
    let count = k,endIdx = nums.length - 1
    while (count != 0) {
        buildheap(nums, endIdx)
        //首尾交换
        let tmp = nums[0]
        nums[0] = nums[endIdx]
        nums[endIdx] = tmp
        endIdx--
        count--
    }
    return nums[nums.length - k]
};
function buildheap(nums,endIdx) {
    
    //无序的数组长度
    let length = endIdx + 1
    for (let i = Math.floor(length/2) -1; i >=0; i--) {
        //从第一个非叶子节点开始
        //left child
        let left = i * 2 + 1
        //right child
        let right = i * 2 + 2
        //注意：堆通常是一个可以被看做一棵"完全二叉树"的数组对象
        //非叶子节点可能只有一个left
        if (right >= length) {
            //right下标数组越界了，right不存在，该非叶子节点
            //只有left
            if (nums[left]> nums[i]) {
                //交换
                let tmp = nums[i]
                nums[i] = nums[left]
                nums[left] = tmp
            }
        } else {
            //left right 都存在
            let max = left
            if (nums[max] < nums[right]) {
                max = right
            }
            if (nums[max] > nums[i]) {
                let tmp = nums[max]
                nums[max] = nums[i]
                nums[i] = tmp
            }
        }
    }
}