function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createList(arr) {
    let curNode = null
    let list = null
    arr.forEach(element => {
        let node = new ListNode()
        node.val = element
        if (curNode) {
            curNode.next = node
            curNode = curNode.next
        } else {
            curNode = node
            list = node
        }
    });
    return list
}

var removeElements = function (head, val) {
    if (head == null) {
        return head
    }
    let dummy = new ListNode()
    dummy.next = head

    let preNode = dummy
    while (head) {
        if (head.val == val) {
            //移除
            preNode.next = head.next
            head = preNode.next
        } else {
            preNode = head
            head = head.next
        }
    }
    return dummy.next
};

