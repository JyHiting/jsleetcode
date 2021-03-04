
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

// let l1 = createList([2, 4, 3])
// let l2 = createList([5, 6, 4])

// var addTwoNumbers = function (l1, l2) {

//     let result = l1
//     let num1 = 0
//     let preNode = null
//     while (l2) {
//         if (l1) {
//             let num2 = (num1 + l2.val + l1.val) % 10
//             num1 = Math.floor((num1 + l2.val + l1.val) / 10)
//             l1.val = num2
//         } else {
//             let num2 = (num1 + l2.val) % 10
//             num1 = Math.floor((num1 + l2.val) / 10)
//             let newNode = new ListNode()
//             newNode.val = num2
//             preNode.next = newNode
//             l1 = newNode
//         }

//         preNode = l1
//         l1 = l1.next
//         l2 = l2.next
//     }
//     while (num1 != 0) {
//         if (l1) {
//             let num2 = (num1 + l1.val) % 10
//             num1 = Math.floor((num1 + l1.val) / 10)
//             l1.val = num2
//             preNode = l1
//             l1 = l1.next
//         } else {
//             let newNode = new ListNode()
//             newNode.val = num1
//             preNode.next = newNode
//             num1 = 0
//         }
//     }
//     return result
// }

// addTwoNumbers(l1, l2)

var removeNthFromEnd = function (head, n) {
    if (!head.next) {
        return null
    }
    let sum = 0
    let first = head
    let second = head
    let preNode = head

    while (n != 0) {
        sum++
        second = second.next
        n--
    }
    while (second.next) {
        sum++
        second = second.next
        preNode = first
        first = first.next
    }
    if (preNode == null) {
        return first.next
    }
    preNode.next = first.next
    return preNode
};
