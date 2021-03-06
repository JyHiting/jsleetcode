var generateMatrix = function (n) {
    let matrix = new Array(n)
    for (let i = 0; i < n; i++) {
        let arr = new Array(n).fill(0)
        matrix[i] = arr
    }
    let curNum = 1
    let direction = "右"
    //校验该节点是否可以访问
    let isValid = (i, j) => {
        if (i < 0 || i >= matrix.length) {
            //i越界
            return false
        }
        if (j < 0 || j >= matrix[0].length) {
            //j越界
            return false
        }
        if (matrix[i][j] != 0) {
            //访问过
            return false
        }
        return true
    }
    //改变方向
    let changeDirection = () => {
        if (direction == "右") {
            direction = "下"
        } else if (direction == "下") {
            direction = "左"
        } else if (direction == "左") {
            direction = "上"
        } else if (direction == "上") {
            direction = "右"
        }
    }
    let gogo = (i, j) => {
        //大的方向和54题一样，只不过54要遍历输出值
        //此题是按既定方向填写值，就要保存当前已经
        //填的最大值
        matrix[i][j] = curNum
        curNum++
        //进行下一步访问
        //while循环找到一个能访问执行的方向
        let count = 4
        while (count != 0) {
            if (direction == "右") {
                if (isValid(i, j + 1)) {
                    gogo(i, j + 1)
                    break
                } else {
                    changeDirection()
                }
            } else if (direction == "下") {
                if (isValid(i + 1, j)) {
                    gogo(i + 1, j)
                    break
                } else {
                    changeDirection()
                }
            } else if (direction == "左") {
                if (isValid(i, j - 1)) {
                    gogo(i, j - 1)
                    break
                } else {
                    changeDirection()
                }
            } else if (direction == "上") {
                if (isValid(i - 1, j)) {
                    gogo(i - 1, j)
                    break
                } else {
                    changeDirection()
                }
            }
            count--
        }

    }
    gogo(0, 0)
    return matrix
};