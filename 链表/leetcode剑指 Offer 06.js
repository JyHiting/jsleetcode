
function ListNode(val) {
    this.val = val;
    this.next = null;
}

//递归
var reversePrint = function (head) {
    let result = []
    let helper = (node) => {
        if (node == null) {
            return
        }
        helper(node.next)
        result.push(node.val)
    }
    helper(head)
    return result
};

//栈迭代
var reversePrint = function (head) {
    let stack = []
    while (head) {
        stack.unshift(head.val)
        head = head.next
    }
    return stack
};

