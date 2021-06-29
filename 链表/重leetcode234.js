
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//找中点利用stack记录从首节点到中点的路径
//然后遍历对比
var isPalindrome = function (head) {

    if (head == null || head.next == null) {
        return true
    }
    let fast = head, slow = head, stack = []
    stack.push(slow)
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        stack.push(slow)
    }
    let next = null
    if (fast.next) {
        //偶数
        next = slow.next
    } else {
        //奇数
        next = slow
    }
    //开始比较
    while (stack.length != 0) {
        let ele = stack.pop()
        if (next.val != ele.val) {
            return false
        }
        next = next.next
    }
    return true
};

//利用递归本身的栈顺利
var isPalindrome = function (head) {

    let helper = (node) => {
        if (node == null) {
            return true
        }
        let result = helper(node.next)
        result = result && (node.val == head.val)
        head = head.next
        return result
    }
    return helper(head)
};
