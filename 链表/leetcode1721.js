
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


//2次遍历找到要交换的节点
var swapNodes = function (head, k) {

    //total记录链表节点总个数
    let node1 = null, node2 = null, total = 0, curNode = head
    while (curNode) {
        total++
        if (total == k) {
            //记录第k个节点
            node1 = curNode
        }
        curNode = curNode.next
    }
    //二次遍历找倒数k个节点
    curNode = head
    num = total - k + 1
    while (curNode) {
        num--
        if (num == 0) {
            break
        }
        curNode = curNode.next

    }
    node2 = curNode
    if (node1 != node2) {
        //开始交换
        let tmp = node1.val
        node1.val = node2.val
        node2.val = tmp
    }
    return head
};

//快慢指针
var swapNodes = function (head, k) {
    if (head == null) {
        return head
    }
    let slow = head, fast = head, num = k - 1
    let node1 = head, node2 = head
    while (fast.next) {
        fast = fast.next
        num--
        if (num == 0) {
            node1 = fast
        } else if (num < 0) {
            slow = slow.next
        }
    }
    node2 = slow
    //开始交换
    let tmp = node1.val
    node1.val = node2.val
    node2.val = tmp
    return head
};