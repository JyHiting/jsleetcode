
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


//递归
var searchBST = function (root, val) {

    let result = null
    let helper = (node) => {
        if (node == null) {
            return null
        }
        helper(node.left)
        if (node.val == val) {
            result = node
        }
        helper(node.right)
    }
    helper(root)
    return result
};

//迭代
var searchBST = function (root, val) {

    let curNode = root
    while (curNode) {

        if (curNode.val > val) {
            curNode = curNode.left
        } else if (curNode.val == val) {
            return curNode
        } else {
            curNode = curNode.right
        }
    }
    return null
};