/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let map = new Map(), nums = [1], count = 1
    while (count <= n - 1) {
        let min = nums.shift()
        if (!map.has(2 * min)) {
            nums.push(2 * min)
            map.set(2 * min, 1)
        }
        if (!map.has(3 * min)) {
            nums.push(3 * min)
            map.set(3 * min, 1)
        }
        if (!map.has(5 * min)) {
            nums.push(5 * min)
            map.set(5 * min, 1)
        }
        heap(nums)
        count++
    }
    return nums[0]
};

function heap(nums) {
    let len = nums.length
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        let left = 2 * i + 1, right = 2 * i + 2
        if (right >= len) {
            //only left
            if (nums[i] < nums[left]) {
                //swap
                let tmp = nums[i]
                nums[i] = nums[left]
                nums[left] = tmp
            }
        } else {
            //left right
            let min = left
            if (nums[min] > nums[right]) {
                min = right
            }
            if (nums[min] < nums[i]) {
                let tmp = nums[i]
                nums[i] = nums[min]
                nums[min] = tmp
            }
        }
    }
}

nthUglyNumber(4)


