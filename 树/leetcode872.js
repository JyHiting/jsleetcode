
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//深度优先搜索
var leafSimilar = function (root1, root2) {

    let arr1 = [], arr2 = []
    let helper = (node, arr) => {
        if (node.left == null && node.right == null) {
            //叶子节点
            arr.push(node)
        }
        if (node.left) {
            helper(node.left, arr)
        }
        if (node.right) {
            helper(node.right, arr)
        }
    }
    helper(root1, arr1)
    helper(root2, arr2)
    //开始比较
    if (arr1.length != arr2.length) {
        return false
    }
    for (let idx = 0; idx < arr1.length; idx++) {
        if (arr1[idx].val != arr2[idx].val) {
            return false
        }
    }
    return true
};

