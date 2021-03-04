function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
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

var mergeTwoLists = function (l1, l2) {
    let result = null
    let curNode = null
    if (l1.val >= l2.val) {
        curNode = l2
        while (l1) {

        }
        return l2
    } else {
        return l1
    }
    return result
};