//常规遍历
//翻转中序遍历
var convertBST = function (root) {   
    let sum = 0
    //递归遍历
    let helper = (node) => { 
        if (node == null) {
            return
        }   
        helper(node.right)
        //处理当前节点
        sum += node.val
        node.val = sum
        helper(node.left)
    }
    helper(root)
    return root
};