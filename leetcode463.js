var islandPerimeter = function (grid) {
    let isValid = (i,j) => { 
        if (i<0 || i>=grid.length) {
            return false
        }
        if (j<0 || j>=grid[0].length) {
            return false
        }
        return true
    }
    let result = 0
    let dfs = (i, j) => { 
        if (isValid(i,j) && grid[i][j] == 1) {
            //处理当前节点
            grid[i][j] = -1
            if (!isValid(i-1,j)) {
                //上是边界
                result++
            }else if (grid[i-1][j] == 0) {
                //上边界是水
                result++
            }
            if (!isValid(i,j+1)) {
                //右是边界
                result++
            }else if (grid[i][j+1] == 0) {
                //右边是水
                result++
            }
            if (!isValid(i+1,j)) {
                //下是边界
                result++
            }else if (grid[i+1][j] == 0) {
                //下边是水
                result++
            }
            if (!isValid(i,j-1)) {
                //左是边界
                result++
            }else if (grid[i][j-1] == 0) {
                //左边是水
                result++
            }
            dfs(i-1, j)
            dfs(i,j+1)
            dfs(i + 1, j)
            dfs(i,j-1)
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                dfs(i,j)
            }
        }
    }
    return result
};