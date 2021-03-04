
//路径走过的节点数
var diameterOfBinaryTree = function (root) {
    //为什么要这样？
    //不得已而为之，js在最外面设置一个全局变量会导致leetcode一直提交不过
    //其它题也有类似情况，想到这个引用传递下去保存结果的方法
    let result = { result: 1 }
    helper(root, result)
    //节点数量-1为路径
    return result.result - 1
};
function helper(node, result) {
    if (node == null) {
        return 0
    }
    let left = helper(node.left, result)
    let right = helper(node.right, result)
    //每一个节点的左右子树加上自己都有可能最大
    //这里做判断，在遍历的过程中就做了判断
    result.result = Math.max(left + right + 1, result.result)
    return Math.max(left, right) + 1
}

diameterOfBinaryTree(null)

