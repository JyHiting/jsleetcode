
function ListNode(val) {
    this.val = val;
    this.next = null;
}

//递归
var reverseList = function (head) {
    
    //很多时候设置一个哑节点有利于简化处理逻辑
    let dummy = null
    let helper = (node) => {
        if (node == null) {
            dummy = new ListNode(-1)
            return dummy
        }
        let preNode = helper(node.next)
        preNode.next = node
        node.next = null
        return node
    }
    helper(head)

    return dummy.next
};