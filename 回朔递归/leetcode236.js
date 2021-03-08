
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//递归就是处理相同子问题
//lowestCommonAncestor返回找到的匹配上的节点
//递归往下执行，回朔往上，往上那么我就要把一些信息
//给带上去好让上面的人知道，然后利用我这些信息处理
//问题

//下面的这种解法基于该二叉树肯定右符合题意的p，q
//那么就一定能找到p，q，找到就往上传递
//传递的的信息总能汇聚到一个节点处理逻辑下
var lowestCommonAncestor = function (root, p, q) {
    if (root == null) {
        return null
    }
    if (root == p || root == q) {
        return root
    }
    //递归主逻辑
    //找左子树匹配上的节点
    let left = lowestCommonAncestor(root.left, p, q)
    //找右子树匹配上的节点
    let right = lowestCommonAncestor(root.right, p, q)
    if (left == null && right == null) {
        //左边子树没找到匹配的节点，右边也没找到
        //返回null标识该子树没有匹配到的节点
        return null
    }
    if (left == null) {
        //右子树找到了，左没找到
        //返回右
        return right
    }
    if (right == null) {
        //左子树找到了，右没找到
        //返回左
        return left
    }
    //左，右都找到了，弹出左右的根
    return root
};