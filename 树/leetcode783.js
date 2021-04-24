
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
//在遍历的过程中就去比较获取最小差值
var minDiffInBST = function (root) {

    let min = Number.MAX_SAFE_INTEGER, preNode = null
    //中序遍历
    let traversal = (node) => {
        if (node == null) {
            return
        }
        traversal(node.left)
        //处理节点
        if (preNode) {
            //和前一个节点计算差值
            min = Math.min(node.val - preNode.val, min)
        }
        preNode = node
        traversal(node.right)
    }
    traversal(root)
    return min
};