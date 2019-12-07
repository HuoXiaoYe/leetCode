/*
给定一个整数数组 nums 和一个目标值 target，
请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/


const twoSum = (arr, target) => {
    let length = arr.length;
    let res = []
    for (let i = 0; i < length; i++) {
        let diff = target - arr[i]
        let index = arr.indexOf(diff);
        if (index != -1 && index != arr[i]) {
            res.push(i, index);
            break
        }
    }
    return res;
}
var nums = [2, 7, 11, 15];
var target = 17
console.log(twoSum(nums,target))
