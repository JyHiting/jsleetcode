
function ListNode(val) {
    this.val = val;
    this.next = null;
}


var deleteNode = function (head, val) {
    let dummy = new ListNode(-1)
    dummy.next = head
    let preNode = dummy, curNode = head
    while (curNode) {
        if (curNode.val == val) {
            //开始删除
            preNode.next = curNode.next
            break
        } else {
            preNode = preNode.next
            curNode = curNode.next
        }
    }
    return dummy.next
};