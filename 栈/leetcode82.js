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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

//利用栈结构
//实现很low
// var deleteDuplicates = function (head) {
//     if (head == null || head.next == null) {
//         return head
//     }
//     let stack = []
//     let curNode = head
//     let flag = null
//     while (curNode) {
//         if (stack.length == 0) {
//             stack.push(curNode)
//         } else {
//             let lastE = stack[stack.length - 1]
//             if (curNode.val != lastE.val) {
//                 if (flag) {
//                     stack.pop()
//                     flag = null
//                     stack.push(curNode)
//                 } else {
//                     stack.push(curNode)
//                 }
//             } else {
//                 flag = lastE
//             }
//         }
//         curNode = curNode.next
//     }
//     if (flag) {
//         stack.pop()
//     }
//     let result = curNode = new ListNode()
//     stack.forEach((node) => {
//         curNode.next = node
//         node.next = null
//         curNode = curNode.next
//     })
//     return result.next
// };

//递归
//值得学习揣摩
var deleteDuplicates = function (head) {
    if (head == null || head.next == null) {
        return head
    }
    if (head.val == head.next.val) {
        let first = head
        while (head != null && head.next != null && head.val == head.next.val) {
            head = head.next
        }
        first.next = deleteDuplicates(head.next)
        return first
    } else {
        head.next = deleteDuplicates(head.next)
        return head
    }
}

let l = createList([1, 1])
deleteDuplicates(l)