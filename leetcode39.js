//此题难点在去重
//下面解法没有去重
// var combinationSum = function (candidates, target) {
    
//     var path = []
//     var result = []
//     for (let i = 0; i < candidates.length; i++) {
//         let ele = candidates[i]
//         helper(candidates,path,result,target,ele)
//     }
//     return result
// };

// function helper(arr, path, result, target, ele) {
    
//     path.push(ele)
//     let newTarget = target - ele
//     if (newTarget == 0) {
//         result.push(path.slice())
//     } else if (newTarget > 0) {
//         for (let i = 0; i < arr.length; i++) {
//             let ele = arr[i]
//             helper(arr,path,result,newTarget,ele)
//         }
//     }
//     path.pop()
// }


//加上去重
//剪枝去重
//一开始想到的去重利用js 的set或者map，但是可行性难度更大
//思考在搜索过程中是否可行：最重要画出搜索树，比如在同一级的兄弟界面有：A，B，C，D
//我遍历了A，走到下一层又有A，B，C，D可供选择，我选择B，那么就有A->B
//如果当初我选择B，走到下一层我选择A，那么就有B->A，一样了不满足题意了
//剪枝就在这里，如果我一开始选择了C，那么我在同一层选择B的时候，继续下一层的时候
//就要思考下一层不能从A开始选择了，要观察上一层已经遍历过的元素：已经遍历了A，B，
//那么在这一层我就不能再选择A，B了只能从已经遍历过的元素中查找，只能从C开始遍历
//规律来了，这里的去重逻辑就是下面的curIdx干的事
var combinationSum = function (candidates, target) {
    
    var path = []
    var result = []
    for (let i = 0; i < candidates.length; i++) {
        let ele = candidates[i]
        helper(candidates,path,result,target,ele,i)
    }
    return result
};

function helper(arr, path, result, target, ele,curIdx) {
    
    path.push(ele)
    let newTarget = target - ele
    if (newTarget == 0) {
        result.push(path.slice())
    } else if (newTarget > 0) {
        for (let i = curIdx; i < arr.length; i++) {
            let ele = arr[i]
            helper(arr,path,result,newTarget,ele,i)
        }
    }
    path.pop()
}

combinationSum([2,3,6,7],7)