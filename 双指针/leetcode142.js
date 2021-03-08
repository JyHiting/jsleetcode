function ListNode(val) {
    this.val = val;
    this.next = null;
}

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
//快慢指针
//此题单纯从算法角度思考是不行的还要归结为数据推到出数学公式
var detectCycle = function (head) {
    if (head == null || head.next == null) {
        //0个1个节点
        //没有环
        return null
    }
    let fast = slow = head
    let first_meet = null//记录第一次相遇的地方
    while (true) {
        if (fast == null || fast.next == null || fast.next.next == null) {
            return null
        }
        slow = slow.next
        fast = fast.next.next
        if (fast === slow) {
            //第一次找到相遇的节点
            //这个节点不一定在哪里但是一定是第一次快慢指针相遇的地方
            first_meet = fast
            break
        }
    }
    //找到了第一次相遇的节点开始找目的节点
    //下面的查找逻辑的算法也是根据数学公式推到出来的在相遇的时候慢指针走的距离*2=快指针走的距离
    while (true) {
        if (first_meet === head) {
            //找到了
            return head
        } else {
            first_meet = first_meet.next
            head = head.next
        }
    }
    return null
};


//利用set，很好理解其实面试一般不会让用达不到考察的目的
// var detectCycle = function (head) {
//     if (head == null || head.next == null) {
//         //0个1个节点
//         return null
//     }
//     let aSet = new Set()
//     while (head) {
//         if (aSet.has(head)) {
//             return head
//         } else {
//             aSet.add(head)
//             head = head.next
//         }
//     }
//     return null
// };
