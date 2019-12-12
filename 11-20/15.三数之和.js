/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 1. 有一个元素为 0 另两个互为相反数
// 2. a + b = -c
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    var resArr = [];
    // 第一种情况
    // if(nums.indexOf(0)!==-1&&nums[0] < 0){ // 数组中有元素 0 并且数组中有负数
    //     let index = 0;
    //     while(nums[index]<0){
    //         let temp = nums[index];
    //         if(nums.indexOf(-temp)!==-1&&){ // 存在互为相反数的两个元素
    //             resArr[resArr.length] = [];
    //             resArr[resArr.length-1].push(temp,0,-temp)
    //         }
    //         index++
    //     }
    // }
    // 第二种情况
    // a + b = 0 - c
    // 外层似乎只需要循环到 索引为零的地方
    // 因为三个数相加 必须有一个数 为负数;
    // 计算任意两个元素的和（双层for循环？？？O(n^2)） 然后取其相反数 查找其相反数是否再数组中
    // 可不可以不双层循环
    // 我现在已经把数组从小到大排序了
    // 
    let index = 0;
    while (nums[index] <= 0) {
        for (var j = index + 1; j < nums.length; j++) {
            let dif = 0 - nums[index] - nums[j]
            if (nums.lastIndexOf(dif) !== -1 && nums.indexOf(dif) !== j && j < nums.lastIndexOf(dif)) { // 存在其相反数
                resArr[resArr.length] = [];
                resArr[resArr.length - 1].push(nums[index], nums[j], dif)
                break
            }
        }
        index++
    }
    return resArr
};