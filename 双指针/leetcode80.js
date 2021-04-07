/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
     if (nums.length < 3) {
         return nums.length
     }
    //从第三个开始
    //pre指向的位置就是后面cur找到的一个符合题意要保留下来的数字将要挪动到的位置
    //cur是为了找到需要保留的数字的位置（规则是：pre所指的位置倒退2个的位置和cur的位置
    //是否相同，相同就不能保留cur的位置的数字，如果保留了挪到pre指向的位置之后就会出现
    //连续3个相同的数字，不符合题意，题意需要最多连续2个相同的数字)
    let pre = 2, cur = 2
    while (cur < nums.length) {
        if (nums[cur] != nums[pre - 2]) {
            nums[pre] = nums[cur]
            pre++
        }
        cur ++
    }
    return pre
};

removeDuplicates([1,1,1,2,2,3])