var nextPermutation = function (nums) {
    //从最右边开始遍历找到一个拐角处（：从大值变小值得过程）
    //找到之后从这个拐角之后的位置到数组结尾处找到一个比拐角下降元素
    //大的一个值，可能多个，但是找到一个最小的，遍历的过程找拐角，
    //说明之前都是递增的，所以从数组最后开始往前找，找到第一个大于
    //拐角之后的元素的值得元素交换，然后把拐角之后的数组从小到大排序
    let right = nums.length - 1
    while (right > 0) {
        let next = right - 1
        if (nums[next] < nums[right]) {
            //翻转
            let begin = right, end = nums.length - 1
            while (end >= begin) {
                if (nums[end] > nums[next]) {
                    //找到一个能和next交换的且比next大的最小的值，交换
                    let tmp = nums[next]
                    nums[next] = nums[end]
                    nums[end] = tmp
                    break
                }
                end--
            }
            end = nums.length - 1
            while (begin <= end) {
                let tmp = nums[begin]
                nums[begin] = nums[end]
                nums[end] = tmp
                begin++
                end--
            }
            return nums
        } else { 
            right = next
        }
    }
    //整个数组遍历完毕都没找到拐角，那么整个数组都是递减的
    //翻转即可
    return nums.reverse()
};

let tmp = nextPermutation([1,1,5])
console.log(666);