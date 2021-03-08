
function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
//map解法
var getIntersectionNode = function (headA, headB) {
    let map = new Map()
    while (headA) {
        if (map.has(headA)) {
            let num = map.get(headA)
            num++
            map.set(headA,num)
        } else { 
            map.set(headA,1)
        }
        headA = headA.next
    }
    while (headB) {
        if (map.has(headB)) {
            return headB
        } else { 
            map.set(headB,1)
        }
        headB = headB.next
    }
};
//双指针
var getIntersectionNode = function (headA, headB) {
    let l1 = headA, l2 = headB
    //l1和l2只要相等就找到相交节点了
    while (l1 != l2) {
        //l1 l2总有一个先到头，到头之后把其指向另一个链表头部
        //这样等另一个长的链表也到头指向短的链表头部的时候
        //那个先到头的指针l1或者l2已经走了一个长-短的差值
        //后到到头的l1或者l2此时在链表头部，此时继续遍历
        //总能使l1和l2一起到头找到交汇处
        if (l1 == null) {
            //发现l1到头了
            l1 = headB
        } else { 
            l1 = l1.next
        }
        if (l2 == null) {
            //发现l2到头了
            l2 = headA
        } else { 
            l2 = l2.next
        }
    }
    return l1
};