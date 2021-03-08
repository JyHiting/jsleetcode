function ListNode(val) {
    this.val = val;
    this.next = null;
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
// var hasCycle = function (head) {
//     if (head == null || head.next == null) {
//         return false
//     }
//     let slow = head
//     let fast = head.next.next
//     let hasCycle = false
//     while (fast && fast.next) {
//         if (slow === fast) {
//             hasCycle = true
//             break
//         } else {
//             slow = slow.next
//             fast = fast.next.next
//         }
//     }
//     return hasCycle
// };


//set集合
var hasCycle = function (head) {
    if (head == null || head.next == null) {
        return false
    }
    let set = new Set()
    while (head) {
        if (set.has(head)) {
            return true
        } else {
            set.add(head)
        }
        head = head.next
    }
    return false
}

let l = createList([3, 2, 0, -4])
hasCycle(l)