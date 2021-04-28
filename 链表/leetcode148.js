
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var sortList = function (head) {
    // 开辟一个数组空间
    let arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    //排序数组中节点
    arr.sort((a, b) => {
        return a.val - b.val
    })
    //遍历数组设置next指针
    for (let i = 0; i < arr.length; i++) {
        let curNode = arr[i]
        if (i > 0) {
            let preNode = arr[i - 1]
            preNode.next = curNode
        }
        curNode.next = null
    }
    return arr[0] ? arr[0] : null
};

//递归归并排序
var sortList = function (head) {
    if (head == null) {
        return null
    }
    if (head.next == null) {
        return head
    }
    //快慢指针找中点
    let slow = head, fast = head.next
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    //从slow处断开
    let tmp = slow.next
    slow.next = null
    //去排序左边的链表
    let list1 = sortList(head)
    //去排序右边的链表
    let list2 = sortList(tmp)
    //合并有序链表
    //排完序合并左右序列
    //设置一个头结点方便下面的逻辑处理
    let result = new ListNode()
    let curNode = result
    while (list1 && list2) {
        if (list1.val > list2.val) {
            curNode.next = list2
            curNode = list2
            list2 = list2.next
        } else {
            curNode.next = list1
            curNode = list1
            list1 = list1.next
        }
        curNode.next = null
    }
    if (list1) {
        curNode.next = list1
    }
    if (list2) {
        curNode.next = list2
    }
    return result.next
};




