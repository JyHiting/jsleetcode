//map统计各个数字出现频率，然后在原数组上从新赋值
// var sortColors = function (nums) {
//     let map = new Map()
//     nums.forEach((item) => {
//         if (map.has(item)) {
//             let num = map.get(item)
//             num++
//             map.set(item,num)
//         } else { 
//             map.set(item,1)
//         }
//     });
//     let begin = 0
//     if (map.has(0)) {
//         let num0 = map.get(0)
//         nums.fill(0, begin, begin + num0)
//         begin = begin + num0 
//     }
//     if (map.has(1)) {
//         let num1 = map.get(1)
//         nums.fill(1, begin, begin + num1)
//         begin = begin + num1 
//     }
//     if (map.has(2)) {
//         let num2 = map.get(2)
//         nums.fill(2, begin, begin + num2)
//         begin = begin + num2 
//     }
//     return nums
// };

//多次扫描
// var sortColors = function (nums) {
    
//     let begin = 0
//     for (let i = begin; i < nums.length; i++) {
//         if (nums[i] == 0) {
//             //交换
//             let tmp = nums[begin]
//             nums[begin] = nums[i]
//             nums[i] = tmp
//             begin ++
//         }
//     }
//     for (let i = begin; i < nums.length; i++) {
//         if (nums[i] == 1) {
//             //交换
//             let tmp = nums[begin]
//             nums[begin] = nums[i]
//             nums[i] = tmp
//             begin ++
//         }
//     }
//     return nums
// };

//实现快排
var sortColors = function (nums) {
    
    qSort(nums,0,nums.length - 1)
    return nums
};
function qSort(nums, left, right) {
    //保存初始要排序的数组端的边界
    let i = left
    let j = right
    if (i > j) {
        return
    }
    let pivot = nums[i]//选择基准点
    while (left < right) {
        //从右边找小于基准点的值
        while (nums[right] >= pivot && left < right) {
            right --
        }
        while (nums[left] <= pivot && left < right) {
            left ++
        }
        if (left < right) {
            //交换
            let tmp = nums[right]
            nums[right] = nums[left]
            nums[left] = tmp
        }
    }
    //把基准值放到我们寻找的位置
    nums[i] = nums[left]
    nums[left] = pivot
    qSort(nums, i, left - 1)
    qSort(nums,left + 1,j)
}


sortColors([2,0,2,1,1,0])