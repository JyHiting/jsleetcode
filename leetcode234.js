
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
//  //双指针
// var isPalindrome = function (head) {
//     if (head == null || head.next == null) {
//         return true
//     }
//     //快慢指针找中点
//     let fast = head, slow = head
//     while (fast.next && fast.next.next) {
//         fast = fast.next.next
//         slow = slow.next
//     }
//     let l1 = null, l2 = null, tail = null
//     if (fast.next) {
//         //偶数个节点
//         l1 = head
//         l2 = fast.next
//     } else { 
//         //奇数个节点
//         l1 = head
//         l2 = fast
//     }
//     //翻转链表
//     helper(slow.next)    
//     //比较
//     while (l2) {
//         if (l2.val != l1.val) {
//             return false
//         } else { 
//             l1 = l1.next
//             l2 = l2.next
//         }
//     }
//     return true
// };

// function helper(list) {
//     if (list.next == null) {
//         return list
//     } else { 
//         let curNode = list
//         let node = helper(list.next)
//         node.next = curNode
//         curNode.next = null
//         return curNode
//     }
// }

//递归很巧妙
//用一个全局变量保存从头开始遍历head节点的位置
//递归栈的特性，逆序访问节点然后和全局保存的从头开始的
//的节点的值是否相等
let globalVal = null
var isPalindrome = function (head) {
    globalVal = head
    return helper(head)
};

function helper(list) {
    if (list == null) {
        return true
    }
    let result = helper(list.next) && globalVal.val == list.val
    globalVal = globalVal.next
    return result
}

function createList(nums) {
    let node = null
    let curNode = null
    nums.forEach(ele => {
        let newNode = new ListNode()
        newNode.val = ele
        if (node) {
            curNode.next = newNode
        } else { 
            node = newNode
        }
        curNode = newNode
    });
    return node
}

let l = createList([1])
isPalindrome(l)
