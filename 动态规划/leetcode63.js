var uniquePathsWithObstacles = function (obstacleGrid) {
    let dptable = new Array(obstacleGrid.length)
    for (let i = 0; i < dptable.length; i++) {
        let arr = new Array(obstacleGrid[0].length)
        dptable[i] = arr
    }
    for (let i = 0; i < dptable.length; i++) {
        for (let j = 0; j < dptable[0].length; j++) {
            if (obstacleGrid[i][j] == 1) {
                dptable[i][j] = 0
            } else {
                //横行和竖立列特殊情况要判断
                //每一行，每一列，只要有一个位置堵了，这个位置后面的都算堵着
                //路径为0了
                //其它情况就是堵着了路径就为0
                if (i == 0) {
                    if (j == 0) {
                        dptable[i][j] = obstacleGrid[i][j] == 1 ? 0 : 1
                    } else {
                        dptable[i][j] = dptable[i][j - 1] == 1 ? 1 : 0
                    }
                } else {
                    if (j == 0) {
                        dptable[i][j] = dptable[i - 1][j] == 1 ? 1 : 0
                    } else {
                        dptable[i][j] = dptable[i - 1][j] + dptable[i][j - 1]
                    }
                }
            }
        }
    }
    return dptable[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};

uniquePathsWithObstacles([[0, 1], [0, 0]])