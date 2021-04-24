
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//快慢指针找中点
//堆栈结构保存前半部分数据
var isPalindrome = function (head) {
    if (head == null || head.next == null) {
        return true
    }
    let slow = head, fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    //开始比较
    let next = slow.next
    while (stack.length != 0) {
        let pop = stack.pop()
        if (pop.val == next.val) {
            next = next.next
        } else {
            return false
        }
    }
    return true
};