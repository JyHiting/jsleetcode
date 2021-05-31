
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var reorderList = function (head) {

    let arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    let left = 0, right = arr.length - 1
    while (left < right) {
        let leftNode = arr[left]
        let rightNode = arr[right]
        leftNode.next = rightNode
        left++
        //left和right是相邻节点直接返回
        if (left == right) {
            break
        }
        rightNode.next = arr[left]
        right--
    }
    arr[left].next = null
};