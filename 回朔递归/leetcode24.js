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

//利用栈
// var swapPairs = function (head) {
//     if (!head) {
//         return null
//     }
//     let stack = []
//     let flag1 = head//原始链游标
//     let flag2 = null
//     let result = flag2 = new ListNode()

//     let num = 2
//     while (flag1) {
//         stack.push(flag1)
//         flag1 = flag1.next
//         num--
//         if (num == 0 || !flag1) {
//             while (stack.length != 0) {
//                 let node = stack.pop()
//                 flag2.next = node
//                 flag2 = flag2.next
//             }
//             num = num == 0 ? 2 : num
//         }
//     }
//     flag2.next = null
//     return result.next
// };

//递归
var swapPairs = function (head) {
    //0节点或者1个节点
    if (head == null || head.next == null) {
        return head
    }
    let newHead = head.next
    head.next = swapPairs(newHead.next)
    newHead.next = head
    return newHead
}

let l = createList([1, 2, 3, 4, 5])
swapPairs(l)