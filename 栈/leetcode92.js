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

//利用栈数据结构
//现实生活出现面试题很多限定了不能使用内置集合相关的方法
var reverseBetween = function (head, m, n) {
    let stack = []
    let first = second = null
    let dummy = preNode = new ListNode()
    dummy.next = head

    let pre_m_node = null
    let n_node = null

    let num = 1
    while (num < m) {
        preNode = preNode.next
        head = head.next
        num++
    }
    num = n - m
    do {
        stack.push(head)
        head = head.next
        num--
    } while (num >= 0);
    while (stack.length != 0) {
        let node = stack.pop()
        preNode.next = node
        preNode = preNode.next
    }
    preNode.next = head
    return dummy.next
};

let l = createList([1, 2, 3, 4, 5])
reverseBetween(l, 2, 4)