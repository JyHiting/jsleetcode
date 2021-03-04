
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
//再简单的递归问题也不能在脑子中去绘制递归的每一步，容易走火入魔，也是不正常的思考方式
//递归是一个长龙，中间看一个过程，末尾（出口）看一下就行了
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) {
        return l2
    }
    if (l2 == null) {
        return l1
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};