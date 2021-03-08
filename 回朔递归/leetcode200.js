var numIslands = function (grid) {

    //验证是否数组越界
    let isValid = (i, j) => { 
        //边界不符合
        if (i < 0 || i >= grid.length) {
            return false
        }
        if (j < 0 || j>= grid[0].length) {
            return false
        }
        //判断已经访问过的
        return grid[i][j] == 1
    }
    //深度优先搜索
    let dfs = (i, j) => { 
        if (isValid(i, j)) {
            //标记访问过
            grid[i][j] = -1

            dfs(i-1, j)
            dfs(i,j+1)
            dfs(i + 1, j)
            dfs(i,j-1)
        }
    }

    let result = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                //开始搜索
                result++
                dfs(i,j)
            }
        }
    }
    return result
};


let grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]

numIslands(grid)