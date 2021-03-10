
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
//栈，迭代广度优先搜索
var levelOrder = function (root) {
    if (root == null) {
        return []
    }
    let queue = [root]
    let result = []
    while (queue.length != 0) {
        let tmp = []
        let length = queue.length
        while (length != 0) {
            let node = queue.shift()
            tmp.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            length--
        }
        result.push(tmp)
    }
    return result
};




