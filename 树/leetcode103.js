
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
//广度优先遍历
var zigzagLevelOrder = function (root) {
    if (root == null) {
        return []
    }
    let isLeft = true, stack = [root],result = []
    while (stack.length != 0) {
        let len = stack.length
        let arr = []
        while (len != 0) {
            let node = stack.shift()
            if (isLeft) {
                arr.push(node.val)
            } else {
                arr.unshift(node.val)
            }
            if (node.left) {
                stack.push(node.left)
            }
            if (node.right) {
                stack.push(node.right)
            }
            len --
        }
        result.push(arr)
        isLeft = !isLeft
    }
    return result
};