function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function buildTree(values) {
    let node = new TreeNode(values[0])
    node.left = buildTree(values.slice(1))
    node.right = buildTree(values.slice(2))
    return node
}