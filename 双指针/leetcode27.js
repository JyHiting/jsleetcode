//快慢指针法
//此处的慢指针指向的地方理解为
//一个空仓库需要后面fast发现的符合咱们预期的数据来填充
var removeElement = function (nums, val) {
    let slow = 0, fast = 0
    while (fast < nums.length) {
        
        if (nums[fast] == val) {
            fast ++
        } else { 
            nums[slow] = nums[fast]
            slow++
            fast++
        }
    }
    return slow
};




function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 

var deleteDuplicates = function (head) {
    if (head == null || heahead.next == null) {
        return head
    }
    let slow = head, fast = head.next
    while (fast) {
        if (slow.val == fast.val) {
            slow.next = fast.next
            slow = slow.next
            fast = fast.next
        } else { 
            slow = slow.next
            fast = fast.next
        }
    }
    return head
};