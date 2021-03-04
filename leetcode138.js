
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

var copyRandomList = function (head) {
    if (head == null) {
        return head
    }
    //记录新旧节点对应信息
    let aMap = new Map()
    let curNode = head
    //第一次遍历构造记录新旧节点对应关心的map
    while (curNode) {
        let newNode = new Node(curNode.val)
        aMap.set(curNode, newNode)
        curNode = curNode.next
    }
    curNode = head
    //第二次遍历设置random指针
    while (curNode) {
        let newNode = aMap.get(curNode)
        let cur_random_node = curNode.random
        let cur_next_node = curNode.next
        if (cur_next_node) {
            newNode.next = aMap.get(cur_next_node)
        } else {
            newNode.next = null
        }
        if (cur_random_node) {
            newNode.random = aMap.get(cur_random_node)
        } else {
            //random == null
            newNode.random = null
        }
        curNode = curNode.next
    }
    return aMap.get(head)
};