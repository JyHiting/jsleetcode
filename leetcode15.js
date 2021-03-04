//穷举法，三层循环迭代判断结果，超时
//本质上很多算法都是穷举法，但是考虑到速度性能等问题，最容易想到的不能直接用
//要结合问题本身发现规律，通过剪枝等手段缩小穷举范围来提升速度性能
//下面会有各种判断即为剪枝，这种剪纸都是基于一些规律数学条件的，不是一眼就知道的
//要善于观察分析，尽自己可能去发现过滤条件，减小遍历规模，每个人切入的角度不同发现的手段不一样
var threeSum = function (nums) {
    nums.sort((a, b) => { 
        return a-b
    })
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            //数组已经是排好序，所以当发现最小的都大于0了
            //就不用继续搜索遍历了不会出现满足题意的a+b+c=0的可能
            break
        }
        if (i > 0) {
            //当前的数组和上一个数组一样，那就跳过不用遍历该元素开头的情况，为什么？
            //在上一个元素开发的遍历范围已经包含了当前元素开头的可能结果，再遍历就
            //重复遍历同一片区域了
            if (nums[i] == nums[i-1]) {
                continue
            }
        }
        //此处其实还需要2个for循环，开寻找满足条件的b，c
        //2层for循环会是时间复杂度为平方级别
        //当固定了a之后省下的就是在a屁股后面找到b和c，满足题意
        //2层for循环可以达到找b和c的目的
        //通过双指针遍历a屁股后面的数据找到满足题意的b和c可以使
        //复杂度从平方级别降级
        let left = i + 1,right = nums.length - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum == 0) {
                let arr = [nums[i], nums[left], nums[right]]
                result.push(arr)
                //下面会有2个while循环，为什么？
                //主要解决在遍历a屁股后面的数据找b和c的时候的重复子区域搜索
                //举例left
                //left和left+1如果一样，那么left+1就不用再看，因为，在left
                //的位置的子搜索区域已经包含left+1的子搜索区域
                while (nums[left] == nums[left+1] && left < right) {
                    left ++
                }
                while (nums[right] == nums[right-1] && left < right) {
                    right --
                }
                left++
                right--
            } else if (sum > 0) {
                //缩小大的那个值
                right--
            } else {
                //增大小的那个值
                left++
            }
        }
    }
    return result
};


threeSum([-1,0,1,2,-1,-4])