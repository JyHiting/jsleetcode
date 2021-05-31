
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


//递归
//递归解决的是大问题可以由它的小问题推到过来，大问题和小问题具有相同结构
//思考递归过程要从宏观上把控不能掉进漩涡
var rob = function (root) {
    if (root == null) {
        return 0
    }
    let sum = root.val
    if (root.left) {
        //左节点存在
        sum += rob(root.left.left) + rob(root.left.right)
    }
    if (root.right) {
        //右节点存在
        sum += rob(root.right.left) + rob(root.right.right)
    }
    return Math.max(sum, rob(root.left) + rob(root.right))
};

//递归加个备忘录
var rob = function (root) {
    var records = {}
    let helper = (node) => {
        if (node == null) {
            return 0
        }
        if (records[node]) {
            return records[node]
        }
        let sum = node.val
        if (node.left) {
            //左节点存在
            sum += rob(node.left.left) + rob(node.left.right)
        }
        if (node.right) {
            //右节点存在
            sum += rob(node.right.left) + rob(node.right.right)
        }
        let result = Math.max(sum, rob(node.left) + rob(node.right))
        records[node] = result
        return result
    }
    return helper(root)
};

var rob = function (root) {
    let helper = (node) => {
        let result = new Array(2).fill(0)
        if (node == null) {
            return new Array(2).fill(0)
        }
        //当前节点要么偷要么不偷
        let leftResult = helper(node.left)
        let rightResult = helper(node.right)
        //当前节点偷，其儿子节点不能偷
        let num1 = node.val + leftResult[0] + rightResult[0]
        //当前节点不偷，儿子节点可偷(是可偷可不偷)
        let num0 = Math.max(leftResult[0], leftResult[1]) + Math.max(rightResult[0], rightResult[1])
        return [num0, num1]
    }
    let result = helper(root)
    return Math.max(result[0], result[1])
};



