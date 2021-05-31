
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var deleteNode = function (root, key) {

    //后序遍历搜索key
    let helper = (node) => {
        if (node == null) {
            return null
        }
        helper(node.left)
        helper(node.right)
        //处理当前节点
        if (node.left && node.left.val == key) {
            //要删除的节点是当前节点的左节点
            if (node.left.right == null) {
                //要删除的节点没有右子节点
                //把左最低按直接接到父节点的left
                node.left = node.left.left
            } else {
                //tmp保存将要删除的节点
                let tmp = node.left
                node.left = node.left.right
                //从将要删除的节点的右子节点的左子节点一路找左找到一个最左的位置
                //把将要删除的节点的左节点放到上面找到的位置的left处
                let lastLeftNode = node.left
                while (lastLeftNode.left) {
                    lastLeftNode = lastLeftNode.left
                }
                lastLeftNode.left = tmp.left
                //把将要删除的节点的左右自节点置空
                tmp.left = null
                tmp.right = null
            }
        }
        if (node.right && node.right.val == key) {
            //要删除的节点是当前节点的右节点
            if (node.right.right == null) {
                node.right = node.right.left
            } else {
                let tmp = node.right
                node.right = node.right.right

                let lastLeftNode = node.right
                while (lastLeftNode.left) {
                    lastLeftNode = lastLeftNode.left
                }
                lastLeftNode.left = tmp.left

                tmp.left = null
                tmp.right = null
            }
        }
    }
    //设置一个头节点方便统一处理逻辑要不然要单独判断删除的节点是根节点还是非根节点
    let head = new TreeNode(-1)
    head.left = root
    helper(head)
    return head.left
};