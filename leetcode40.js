//回溯算法
    var combinationSum2 = function (candidates, target) {
        
        //排序
        candidates.sort((a, b) => { 
            return a-b
        })
        var path = []
        var result = []
        //设置临时数组用来保存搜索树中同一层已经访问过的节点
        //已经访问过的节点在后面访问的过程中遇到和已经访问过
        //的节点值相同界面就调过，这就是此题和39题的最大区别
        let tmpArr = []
        for (let i = 0; i < candidates.length; i++) {
            let ele = candidates[i]
            if (tmpArr.includes(ele)) {
                continue
            }
            tmpArr.push(ele)
            helper(result,path,candidates.slice(i+1),target,ele)
        }
        return result
    };

    function helper(result,path,arr,target, ele) {
        
        path.push(ele)
        let newTarget = target - ele
        if (newTarget == 0) {
            //满足条件的一个路径
            result.push(path.slice())
        } else if (newTarget > 0) {
            let tmpArr = []
            for (let i = 0; i < arr.length; i++) {
                let ele = arr[i]
                if (tmpArr.includes(ele)) {
                    continue
                }
                tmpArr.push(ele)
                helper(result,path,arr.slice(i+1),newTarget,ele)
            }
        }
        path.pop()
    }

    combinationSum2([2,5,2,1,2],5)


