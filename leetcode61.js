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

//双向队列
// var rotateRight = function (head, k) {
//     if (k == 0 || head == null) {
//         return head
//     }
//     let deque = []
//     let num = 0
//     let curNode = head
//     while (curNode) {
//         deque.unshift(curNode)
//         curNode = curNode.next
//         num++
//     }
//     k = k % num
//     while (k != 0) {
//         let shiftNode = deque.shift()
//         deque.push(shiftNode)
//         k--
//     }
//     let newList = curNode = new ListNode()
//     while (deque.length != 0) {
//         let popNode = deque.pop()
//         curNode.next = popNode
//         curNode = curNode.next
//     }
//     curNode.next = null
//     return newList.next
// };

//建立环断开环
var rotateRight = function (head, k) {
    if (k == 0 || head == null || head.next == null) {
        return head
    }
    let num = 0
    let curNode = head
    while (curNode) {
        num++
        if (curNode.next == null) {
            curNode.next = head
            break
        } else {
            curNode = curNode.next
        }
    }
    k = k % num
    k = num - k
    while (k != 0) {
        curNode = curNode.next
        k--
    }
    let result = curNode.next
    curNode.next = null
    return result

}
let l = createList([1, 2, 3, 4, 5])
rotateRight(l, 2)