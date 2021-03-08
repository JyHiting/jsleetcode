//我能想到的暴力解法（是个人都能想到），但是超时
//下面是双指针解法（其实我没想到，我没想到这样就能推算出来最大面积）
//那些第一眼就看出来的人真让人佩服
var maxArea = function (height) {
    let max = 0, left = 0, right = height.length - 1
    while (left <= right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left))
        if (height[left] > height[right]) {
            right--
        } else { 
            left++
        }
    }
    return max
};