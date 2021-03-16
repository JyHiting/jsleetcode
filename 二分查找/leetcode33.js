/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//谁让我想到这个方法了，不可能会让我这么做，此题必有蹊跷
 var search = function(nums, target) {

     for (let i = 0; i < nums.length; i++) {
         if (nums[i] == target) {
             return i
         }
     } 
     return -1
 };
 //基于上面最笨的遍历继续思考
var search = function (nums, target) {
     //数据是有规律的，即使旋转之后也是局部递增，前一部分的数字都大于后一部分递增数据
    if (target < nums[0]) {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] === target) {
                return i
            }
        }
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) {
                return i
            }
        }
    }
    return -1
};
//二分查找
var search = function (nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] == target) {
            //找到结果
            return mid
        }
        if (nums[left] <= nums[mid]) {
            //左边一定有序
            if (target >= nums[left] && target <= nums[mid]) {
                //target 在有序的左边
                right = mid - 1
            } else {
                left = mid + 1
            }
        }else if (nums[mid] <= nums[right]) {
            //左边一定无序
            if (target >= nums[mid] && target <= nums[right]) {
                //target 在有序的右边
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};


search([4,5,6,7,0,1,2],3)
