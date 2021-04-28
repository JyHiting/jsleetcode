
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var rangeSumBST = function (root, low, high) {

    let result = 0
    //中序遍历
    let helper = (node) => {
        if (node == null) {
            return
        }
        helper(node.left)
        //处理当前节点
        if (node.val >= low && node.val <= high) {
            result += node.val
        }
        helper(node.right)
    }
    helper(root)
    return result
};