/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
     
    let stack = [],result = 0
    for (let idx = 0; idx < height.length; idx++) {
        //当前的一堵墙
        let curH = height[idx]
        let lastH = height[stack[stack.length - 1]]
        if (curH > lastH) {
            //此时的墙能存住水
            let bootom = height[stack[stack.length - 1]] 
            while (curH >= height[stack[stack.length - 1]]) {
                let popIdx = stack.pop()
                let popH = height[popIdx]
                result += (idx - popIdx - 1) * (Math.min(popH, height[idx]) - bootom)             
                bootom = Math.min(popH, height[idx])
            }
            if (stack.length != 0) {
                result += (idx - stack[stack.length - 1] - 1) * (curH - bootom)             
            }
            stack.push(idx)
        } else {
            stack.push(idx)
        }
    }
    return result
};

trap([0,1,0,2,1,0,1,3,2,1,2,1])