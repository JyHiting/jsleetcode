
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


//递归搜索遍历比较
var isSameTree = function (p, q) {

    let helper = (node1, node2) => {

        if (node1 == null && node2 == null) {
            return true
        }
        if (node1 == null || node2 == null) {
            return false
        }
        return node1.val == node2.val && helper(node1.left, node2.left) && helper(node1.right, node2.right)
    }
    return helper(p, q)
};