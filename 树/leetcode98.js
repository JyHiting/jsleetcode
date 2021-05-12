
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


//递归
var isValidBST = function (root) {

    let stack = []
    let helper = (node) => {
        if (node == null) {
            return
        }
        helper(node.left)
        stack.push(node)
        helper(node.right)
    }
    helper(root)
    console.log(stack);
    for (let i = 0; i < stack.length; i++) {
        if (i > 0) {
            if (stack[i - 1].val >= stack[i].val) {
                return false
            }
        }
    }
    return true
};

