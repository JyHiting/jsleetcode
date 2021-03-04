
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//递归解法不予以考虑
// var inorderTraversal = function (root) {
//     let arr = []
//     let handleNode = (root) => {
//         if (root == null) {
//             return
//         }
//         //先处理左子树
//         handleNode(root.left)
//         //再处理根节点
//         arr.push(root.val)
//         //然后处理右子树
//         handleNode(root.right)
//     }
//     handleNode(root)
//     return arr
// };


//利用栈数据结构
var inorderTraversal = function (root) {
    let res = []
    let curNode = root
    let stack = []

    while (curNode || stack.length != 0) {
        while (curNode) {
            stack.push(curNode)
            curNode = curNode.left
        }
        curNode = stack.pop()
        res.push(curNode.val)
        curNode = curNode.right
    }
    return res
};
