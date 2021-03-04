var trap = function (height) {
    let stack = []//记录坐标
    let blues = 0, black = 0
    let result = 0
    height.forEach((item,idx) => {
        while (stack.length != 0 && item > height[stack[stack.length - 1]]) {
            let h = height[stack.pop()]//池子底部高度
            //准备匹配一个最近的池子左边界
            if (stack.length == 0) {
                //栈为空
                //找不到符合题意的左边界
                break
            }
            //能找到符合题意的左边界
            let left = height[stack[stack.length - 1]]//一个左边界
            //计算容量
            //左右边界取最短当容器高度
            let minH = Math.min(left, item)
            //容器长
            let dis = idx - stack[stack.length - 1] - 1
            //容量累加
            //-h的作用是减去池子低高度
            result += dis*(minH - h)
        }
        stack.push(idx)
    });

    return result
};