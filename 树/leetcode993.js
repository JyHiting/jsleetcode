
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var isCousins = function (root, x, y) {

    let queue = [root]
    while (queue.length != 0) {
        let count = queue.length
        let node = queue.shift()
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
        let tmpArr = []
        while (count != 0) {

            if (node.left) {
                let obj = { parent: node, node: node.left }
                tmpArr.push(obj)
            }
            if (node.right) {
                let obj = { parent: node, node: node.right }
                tmpArr.push(obj)
            }
            count--
        }

        let x_node = null, y_node = null
        for (let x_idx = 0; x_idx < tmpArr.length; x_idx++) {
            let obj = tmpArr[x_idx]
            if (obj.node.val == x) {
                x_node = obj
            }
            if (obj.node.val == y) {
                y_node = obj
            }
        }
        console.log(x_node.parent.val);
        console.log(y_node.parent.val);

        if (x_node && y_node) {
            if (x_node.parent !== y_node.parent) {
                return true
            }
            // for (let y_idx = x_idx + 1; y_idx < tmpArr.length; y_idx++) {
            //     let obj = tmpArr[y_idx]
            //     if (obj.node.val == y) {

            //         console.log(obj.node.val);
            //         if (x_node.parent !== obj.parent) {
            //             return true
            //         }
            //         break
            //     }
            // }
        }

    }
    return false
};