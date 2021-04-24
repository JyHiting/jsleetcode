
var NumMatrix = function (matrix) {
    //初始化前缀和
    //前缀和数组下标一般从下标1开始但是也不一定这样，这样处理方便后面计算差值
    this.sums = new Array(matrix.length + 1)
    for (let i = 0; i < this.sums.length; i++) {
        let arr = new Array(matrix[0].length + 1).fill(0)
        this.sums[i] = arr
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            this.sums[i + 1][j + 1] = this.sums[i][j + 1] + this.sums[i + 1][j] - this.sums[i][j] + matrix[i][j]
        }
    }
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return this.sums[row2 + 1][col2 + 1] - this.sums[row1][col2 + 1] - this.sums[row2 + 1][col1] + this.sums[row1][col1]
};


