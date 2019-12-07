/*
给定一个整数数组 nums 和一个目标值 target，
请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

// 找到目标值与当前值的差值，然后查找数组中是否有当前值
const twoSum = (arr, target) => {
    let length = arr.length;
    let res = []
    for (let i = 0; i < length; i++) {
        let diff = target - arr[i]
        let index = arr.indexOf(diff);
        if (index != -1 && index != i) {
            res.push(i, index);
            break
        }
    }
    return res;
}
var nums = [2, 7, 11, 15];
var target = 17
console.log(twoSum(nums, target))

/*
高手的解法
var twoSum = function(nums, target) {
    var temp=[];
    for(var i=0; i<nums.length; i++){
        var dif=target-nums[i];
        if(temp[dif]!=undefined){
            return [temp[dif], i];
        }
        temp[nums[i]]=i;
    }
}
*/