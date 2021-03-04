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

var partition = function (head, x) {
    if (head == null || head.next == null) {
        return head
    }

    let l1 = l1_cur_node = new ListNode(0)//<x
    let l2 = l2_cur_node = new ListNode(0)//>=x
    while (head) {
        if (head.val >= x) {
            l2_cur_node.next = head
            l2_cur_node = l2_cur_node.next
        } else {
            l1_cur_node.next = head
            l1_cur_node = l1_cur_node.next
        }
        head = head.next
    }
    //合并
    l1_cur_node.next = l2.next
    l2_cur_node.next = null
    return l1.next
};