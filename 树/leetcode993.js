
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//广度优先搜索
var isCousins = function (root, x, y) {

    let queue = [root]
    while (queue.length != 0) {
        let count = queue.length

        let tmpArr = []
        //一层一层来
        while (count != 0) {
            let node = queue.shift()
            if (node.left) {
                let obj = {}
                obj.node = node.left
                obj.parent = node
                tmpArr.push(obj)
                queue.push(node.left)
            }
            if (node.right) {
                let obj = {}
                obj.node = node.right
                obj.parent = node
                tmpArr.push(obj)
                queue.push(node.right)
            }
            count--
        }
        let xNode = null, yNode = null
        for (let idx = 0; idx < tmpArr.length; idx++) {
            let obj = tmpArr[idx]
            if (obj.node.val == x) {
                xNode = obj
            }
            if (obj.node.val == y) {
                yNode = obj
            }

            if (xNode && yNode) {
                console.log(xNode.parent);
                console.log(yNode.parent);
                if (xNode.parent !== yNode.parent) {
                    return true
                }
            }
        }
    }
    return false
};