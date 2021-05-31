
function ListNode(val) {
    this.val = val;
    this.next = null;
}

//借助map，set之类的集合容器
var getIntersectionNode = function (headA, headB) {

    let set = new Set()
    while (headA) {
        set.add(headA)
        headA = headA.next
    }
    while (headB) {
        if (set.has(headB)) {
            return headB
        }
        headB = headB.next
    }
    return null
};

//一开始没想到此种解法
//数学知识了
var getIntersectionNode = function (headA, headB) {
    let l1 = headA, l2 = headB
    while (l1 != l2) {
        if (l1 == null) {
            l1 = headB
        } else {
            l1 = l1.next
        }
        if (l2 == null) {
            l2 = headA
        } else {
            l2 = l2.next
        }
    }
    return l1
};