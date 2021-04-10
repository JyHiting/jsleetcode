/**
 * @param {number[]} nums
 */


//是的，这样做就对不起它这个简单的题目了
//一般应该不会让这么做
var NumArray = function (nums) {
     this.nums = nums
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let sum = 0
    for (let i = left; i < right + 1; i++) {
        sum += this.nums[i]
    }
    return sum
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

 var NumArray = function (nums) {
     this.nums = nums
     this.sums = []
     //计算前缀和
     for (let i = 0; i < nums.length; i++) {
         if (i == 0) {
            this.sums[i] = nums[i]
         } else {
            this.sums[i] = this.sums[i-1] + nums[i]
         }
     }
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function (left, right) {
    if (left == 0) {
        return this.sums[right]
    } else {
        return this.sums[right] - this.sums[left - 1]
    }
};