
//中序遍历
//一开始是中序遍历这个树把结果放入数组，再遍历数组是否递增
//浪费空间
//下面中序遍历的顺序继续前一个值，遍历的过程就把排序的正确
//与否给计算出来了
var isValidBST = function (root) {
    let preVal = Number.MIN_SAFE_INTEGER
    let helper = (node) => { 
        if (node == null) {
            return true
        }
        if (!helper(node.left)) {
            return false
        }
        if (node.val <= preVal) {
            return false
        }
        preVal = node.val
        return helper(node.right)
    }
    return helper(root)
}

 
