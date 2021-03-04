function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var rob = function (root) {
    //用map记录子问题的解
    let map1 = new Map() //记录某个节点选中下的最大值
    let map2 = new Map() //记录某个节点不选中下的最大值

    const dfs = (node) => {
        if (node == null) {
            return
        }
        dfs(node.left)
        dfs(node.right)
        //handle node
        map1.set(node, node.val + (map2.get(node.left) || 0) + (map2.get(node.right) || 0))
        map2.set(node, Math.max(map1.get(node.left) || 0, map2.get(node.left) || 0) + Math.max(map1.get(node.right) || 0, map2.get(node.right) || 0))
    }
    dfs(root)
    //所有子问题解已经记录完毕
    return Math.max(map1.get(root) || 0, map2.get(root) || 0)
};