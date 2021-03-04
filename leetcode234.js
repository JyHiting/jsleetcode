function ListNode(val, next) {
    this.val = val || 0
    this.next = next || null
}

var isPalindrome = function (head) {
    if (head == null || head.next == null) {
        return true
    }
    let stack = []
    let dummy = fast = slow = new ListNode()
    dummy.next = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next
        //记录慢指针访问过的节点
        stack.push(slow)
    }
    if (fast.next == null) {
        //偶数
        let curNode = slow.next
        while (stack.length != 0) {
            let node = stack.pop()
            if (curNode.val != node.val) {
                return false
            }
        }
        return true
    }
    if (fast.next.next == null) {
        //奇数
        let curNode = fast
        while (stack.length != 0) {
            let node = stack.pop()
            if (curNode.val != node.val) {
                return false
            }
            return true
        }
    }

};