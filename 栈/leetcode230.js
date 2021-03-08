
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//谁都能想到的遍历找值的方法：中序遍历
//优先不予以考虑此种解法
var kthSmallest = function (root, k) {
    let result = []
    let helper = (node) => {
        if (node == null) {
            return
        }
        helper(node.left)
        result.push(node.val)
        helper(node.right)
    }
    helper(root)
    return result[k - 1]
};

//迭代栈
var kthSmallest = function (root, k) {
    let stack = []
    while (true) {
        //一直走到左的尽头
        while (root != null) {
            stack.push(root)
            root = root.left
        }
        let node = stack.pop()
        k--
        if (k == 0) {
            return node.val
        }
        root = node.right
    }
};