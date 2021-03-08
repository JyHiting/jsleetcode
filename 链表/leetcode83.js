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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteDuplicates = function (head) {
    if (head == null || head.next == null) {
        return head
    }
    if (head.val == head.next.val) {
        while (head != null && head.next != null && head.val == head.next.val) {
            head = head.next
        }
        
    } else {
        head.next = deleteDuplicates(head.next)
        return head
    }
};