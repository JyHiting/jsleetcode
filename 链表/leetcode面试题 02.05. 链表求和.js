
function ListNode(val) {
    this.val = val;
    this.next = null;
}


var addTwoNumbers = function (l1, l2) {
    //保存进位
    let next = 0, dummy = new ListNode(-1), curNode = dummy
    while (l1 && l2) {

        let sum = l1.val + l2.val + next
        next = Math.floor(sum / 10)

        let newNode = new ListNode(sum % 10)
        curNode.next = newNode

        curNode = curNode.next
        l1 = l1.next
        l2 = l2.next
    }

    while (l2) {
        let sum = l2.val + next
        next = Math.floor(sum / 10)
        let newNode = new ListNode(sum % 10)
        curNode.next = newNode

        curNode = curNode.next
        l2 = l2.next
    }

    while (l1) {
        let sum = l1.val + next
        next = Math.floor(sum / 10)
        let newNode = new ListNode(sum % 10)
        curNode.next = newNode

        curNode = curNode.next
        l1 = l1.next
    }

    if (next > 0) {
        let newNode = new ListNode(next)
        curNode.next = newNode
    }
    return dummy.next
};