/*
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
找出 nums 中的三个整数，使得它们的和与 target 最接近。
返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var threeSumClosest = function (nums, target) {
//     nums.sort((a, b) => a - b);
//     let sum = 0;
//     let dif = Number.MAX_SAFE_INTEGER;
//     // 定一个值
//     for (var i = 0; i < nums.length - 1; i++) {
//         let first = i + 1;
//         let last = nums.length - 1;
//         while (true) {
//             // 退出条件？？
//             if (first > last) {
//                 break;
//             }
//             if (Math.abs(target - (nums[i] + nums[first] + nums[last])) < dif) {
//                 sum = (nums[i] + nums[first] + nums[last])
//                 dif = Math.abs(target - sum);
//             } else {
//                 first++;
//                 last--;
//             }
//         }
//     }
//     return sum

// };
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    var sum = 0;
    let dif = Number.MAX_SAFE_INTEGER;
    var length = nums.length
    for (var i = 0; i < length - 2; i++) {
        let left = i + 1;
        let right = length - 1;
        while (left < right) {
            let tempSum = nums[i] + nums[left] + nums[right];
            if (tempSum > target) {
                right--
            } else if (tempSum < target) {
                left++
            } else {
                return tempSum;
            }
            if (Math.abs(tempSum - target) < dif) {
                sum = tempSum;
                dif = Math.abs(tempSum - target)
            }
        }
    }
    return sum
};
