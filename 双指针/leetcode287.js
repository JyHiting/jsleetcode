//利用map可解题，单无意义
// var findDuplicate = function (nums) {
//     let map = new Map()
//     for (const item of nums) {
//         if (map.has(item)) {
//             return item
//         } else { 
//             map.set(item,1)
//         }
//     }
// };

//复习二分法
var findDuplicate = function (nums) {
    //nums里面元素范围在1~nums.length - 1之间
    let left = 1, right = nums.length - 1
    //二分法魔鬼细节1：到底需不需要left<=right
    while (left < right) {
        //二分法魔鬼细节2：相加溢出（当然我这里没写）
        let mid = Math.floor((left + right) / 2)
        let count = 0
        nums.forEach((item) => {
            if (item <= mid) {
                count ++
            }
        });
        //二分法魔鬼细节3：指针收缩到底加不加1减不减1
        if (count > mid) {
            //重复在左边区间
            right = mid
        } else { 
            left = mid + 1
        }
    }
    return left
};

let result = findDuplicate([1,3,4,2,2])

