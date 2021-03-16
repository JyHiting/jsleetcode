
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (head == null || head.next == null) {
        return head
    }
    //left用来记录奇数序列的最后一个，right用来指向最近的一个偶数节点
    //right的下一个节点（如果存在的情况下）就是要挪动到left后面的节点
    let left = head, right = head.next
    while (right && right.next) {
        let midNode = right.next
        right.next = midNode.next

        let tmpNode = left.next
        left.next = midNode
        midNode.next = tmpNode

        left = left.next
        right = right.next
    }
    return head
 };