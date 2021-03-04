//利用map来降低一定时间复杂度
//一开始我没想到
//其实很多时候map这种结构都是一种技巧
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const ele = nums[i];
        if (map.has(target - ele)) {
            return [map.get(target-ele),i]
        } else { 
            map.set(nums[i],i)
        } 
    }
};


let tmp = twoSum([3,3], 6)
console.log(666);