
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var insertIntoBST = function (root, val) {
    if (root == null) {
        let newNode = new TreeNode(val)
        return newNode
    }
    let curNode = root
    while (curNode) {
        if (curNode.val > val) {
            //要插入的节点在当前节点的右边
            if (curNode.left == null) {
                let newNode = new TreeNode(val)
                curNode.left = newNode
                break
            } else {
                //继续寻找
                curNode = curNode.left
            }
        } else {
            //要插入的节点在当前节点的左边
            if (curNode.right == null) {
                let newNode = new TreeNode(val)
                curNode.right = newNode
                break
            } else {
                //继续寻找
                curNode = curNode.right
            }
        }
    }
    return root
};