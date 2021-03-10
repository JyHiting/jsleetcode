
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
//此题最大的难度是理解题意，我钻进怎么打印"#"其实此题没有打印这个一说
//根据题意：右子节点存在的情况下左子节点必然存在，右子节点不存在的情况，左子节点不一定存在
var upsideDownBinaryTree = function (root) {
    if (root == null) {
        return root
    }
    //我发现的规律是，顺指针调换顺序
    //left变为root root变为right right变为left
    let helper = (node) => {
        if (node == null) {
            return null
        }
        let left = helper(node.left)
        let right = helper(node.right)
        if (left == null) {
            return new TreeNode(node.val)
        } else {

            let lastRight = left
            while (lastRight.right) {
                lastRight = lastRight.right
            }
            if (right) {
                //根据题意right节点不一定存在
                //要判断
                lastRight.left = new TreeNode(right.val) 
            }
            lastRight.right = new TreeNode(node.val)
            //返回left的含义：left作为左子树的根
            return left
        }
    }
    return helper(root) 
};

