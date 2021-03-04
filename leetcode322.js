
//动态规划
// var coinChange = function (coins, amount) {
//     let dptable = new Array(amount + 1).fill(amount + 1)//table标识下表为i的金额所需的最少硬币数量
//     dptable[0] = 0
//     for (let i = 0; i <= amount; i++) {
//         for (let j = 0; j < coins.length; j++) {
//             let coin = coins[j]
//             if (i - coin < 0) {
//                 continue
//             } else if (i - coin == 0) {
//                 dptable[i] = 1
//             } else { 
//                 dptable[i] = Math.min(dptable[i],dptable[i-coin]+1)
//             }
//         }
//     }
//     let last = dptable.pop()
//     return last == amount +1?-1:last
// };

coinChange([2], 3)



var removeDuplicates = function (nums) {
    if (nums.length == 1) {
        return 1
    }
    let slow = 0, fast = 0
    while (true) {
        if (nums[slow] == nums[fast]) {
            fast ++
        } else { 
            slow++
            nums[slow] = nums[fast]
            fast ++
        }
        if (fast >= nums.length) {
            break
        }
    }
    return slow +1
};