
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

//利用map记录副本信息
var copyRandomList = function (head) {

    let map = new Map(), curNode = head
    //遍历原始列表创建对应的副本节点并一一对应
    while (curNode) {
        let newNode = new Node(curNode.val, null, null)
        map.set(curNode, newNode)
        curNode = curNode.next
    }
    //开始组装结果链表
    //把上一步创建的副本串起来
    let dummy = new Node(-1, null, null)
    curNode = dummy
    while (head) {
        curNode.next = map.get(head)
        curNode.next.random = map.get(head.random)
        curNode = curNode.next
        head = head.next
    }
    return dummy.next
};