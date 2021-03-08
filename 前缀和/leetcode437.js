
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

 //前缀和
var pathSum = function (root, sum) {
    //记录路径上的前缀和
    //初始pathSum为0的情况，当路径和刚好为sum的情况
    let map = new Map([[0,1]])
    let pathSum = 0,result = 0
    let pathSumSearch = (node) => { 
        if (node == null) {
            return
        }
        pathSum += node.val

        if (map.has(pathSum-sum)) {
            result += map.get(pathSum-sum)
        }

        if (map.has(pathSum)) {
            let count = map.get(pathSum)
            count++
            map.set(pathSum,count)
        } else { 
            map.set(pathSum,1)
        }
 
        pathSumSearch(node.left)
        pathSumSearch(node.right)
        //回滚状态
        let count = map.get(pathSum)
        count--
        if (count == 0) {
            map.delete(pathSum)
        } else { 
            map.set(pathSum,count)
        }
        pathSum -= node.val
    }
    pathSumSearch(root)
    return result
};
