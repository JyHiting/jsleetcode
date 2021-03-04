var hanota = function (A, B, C) {
    helper(A.length, A, B, C)
};
//递归的a，b，c是通过参数下发的要小心我们处理的a，b，c和原始的a，b，c的不一样
function helper(num, a, b, c) {
    if (num == 1) {
        //把a最上一个挪到b
        c.unshift(a.shift())
        return
    }
    //递归的核心逻辑
    //当2层的时候推演一下
    //当3层的时候推演一下
    //真不行再推演4层的时候
    //发现规律，在n>2的时候和n=2一样（压缩饼干），把n以上的层数压缩为1层考虑
    //那么递归的每一次处理逻辑就是：怎么把n以上的n-1层借助可用的柱子移动出来
    //漏出最后一层，把最后一层就一个，直接挪过去即可
    helper(num - 1, a, c, b)
    //把a最上一个挪到c
    c.unshift(a.shift())
    //把b最上移动到c
    helper(num - 1, b, a, c)

}
