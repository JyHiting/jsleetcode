
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

//快慢指针
// var removeNthFromEnd = function (head, n) {

//     let first = second = result = head
//     //设置一个空节点为了保证下面使用preNode的时候不为空，保持处理逻辑的一致性
//     //不用针对特殊情况进行考虑
//     let preNode = new ListNode()
//     preNode.next = head
//     let num = n
//     while (num > 1) {
//         second = second.next
//         num--
//     }
//     while (second.next) {
//         second = second.next
//         preNode = first
//         first = first.next
//     }
//     if (first == result) {
//         return result.next
//     }
//     preNode.next = first.next
//     return result
// };


//队列
var removeNthFromEnd = function (head, n) {
    let stack1 = []
    let stack2 = []
    while (head) {
        stack1.push(head)
        head = head.next
    }
    while (n > 1) {
        stack2.push(stack1.pop())
        n--
    }
    //丢掉
    let discard = stack1.pop()
    if (stack1.length == 0) {
        return discard.next
    }
    let preNode = stack1.pop()
    preNode.next = discard.next
    stack2.push(preNode)
    while (stack1.length != 0) {
        stack2.push(stack1.pop())
    }
    return stack2.pop()
}

let l = createList([1, 2, 3, 4, 5])
removeNthFromEnd(l, 2)