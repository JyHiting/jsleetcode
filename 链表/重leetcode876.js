
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//遍历拿到中点
//二次遍历找到中点
//一般不会让我们这么干
var middleNode = function (head) {
    if (head.next == null || head == null) {
        return head
    }
    let count = 0;
    let begin = head
    while (begin) {
        count++
        begin = begin.next
    }
    begin = head
    let mid = count % 2 == 0 ? count / 2 : (count - 1) / 2
    do {
        mid--
        begin = begin.next
    } while (mid > 0);

    return begin
};

//快慢指针
var middleNode = function (head) {

    let fast = head, slow = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    if (fast.next) {
        //偶数
        return slow.next
    }
    //奇数
    return slow
};


