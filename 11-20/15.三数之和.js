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
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
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
    while(nums[index]<=0){
        for(var j=index+1;j<nums.length;j++){
            let dif = 0 - nums[index] - nums[j]
            if(nums.lastIndexOf(dif)!==-1&&nums.lastIndexOf(dif)!==j&&j<nums.lastIndexOf(dif)){ // 存在其相反数
                resArr[resArr.length] = [];
                resArr[resArr.length-1].push(nums[index],nums[j],dif)
                break
            }
        }
        index ++
    }
    console.log(resArr)
    return Array.from(new Set(resArr.map(item => item.join('-')))).map(item => item.split('-'))
};

var threeSum = function (nums) {
    let res = []
    let length = nums.length;
    nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
    // 和为零 则一个数组中必定有的元素为正 有的元素为负
    if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解
        for (let i = 0; i < length - 2;) {
            if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
            let first = i + 1
            let last = length - 1
            do {
                if (first >= last || nums[i] * nums[last] > 0) break // 两人选相遇，或者三人同符号，则退出
                let result = nums[i] + nums[first] + nums[last]
                if (result === 0) { // 如果可以组队
                    res.push([nums[i], nums[first], nums[last]])
                }
                if (result <= 0) { // 实力太弱，把菜鸟那边右移一位
                    while (first < last && nums[first] === nums[++first]) { } // 如果相等就跳过
                } else { // 实力太强，把大神那边左移一位
                    while (first < last && nums[last] === nums[--last]) { }
                }
            } while (first < last)
            while (nums[i] === nums[++i]) { }
        }
    }
    return res
}