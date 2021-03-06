
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//学习别人的递归思路，让我对递归有了更好的认识
var flatten = function (root) {
    if (root == null) {
        return
    }
    //递归处理的是相同子问题，是相同不是相似
    //处理完当前节点的逻辑，下面的节点树还是一个树
    //问题是一个问题，那就继续调用flatten处理下一个
    //相同的问题（规模变小）
    if (root.left == null) {
        flatten(root.right)
    } else {
        //观察先序遍历的走向
        //访问到一个节点的时候，先处理的是左节点
        //那么就把左放到当前节点的右边，原来的右
        //子树放哪？不能丢了
        //原来的右子树一定在左边的子树遍历完再遍历
        //那么我就把原来的右树放到左树的最后遍历
        //的那个元素后面不就可以了吗
        let left = root.left
        let right = root.right
        root.right = left
        root.left = null

        let preRight = left
        while (preRight.right != null) {
            preRight = preRight.right
        }
        preRight.right = right
        //继续递归
        flatten(root.right)
    }
};
