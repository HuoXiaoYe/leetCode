/*
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
你可以假设 nums1 和 nums2 不会同时为空。

示例 1:
nums1 = [1, 3]
nums2 = [2]
则中位数是 2.0

示例 2:
nums1 = [1, 2]
nums2 = [3, 4]
则中位数是 (2 + 3)/2 = 2.5

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // let mergeArr = [...nums1, ...nums2]
    // concat的效率要比三点运算符高
    let mergeArr = nums1.concat(nums2)
    let sortArr = mergeArr.sort((a, b) => a - b)
    let length = sortArr.length;
    let mid = length / 2;
    if (length % 2 == 0) { // 偶数
        return (sortArr[mid] + sortArr[mid - 1]) / 2
    } else {
        return sortArr[Math.floor(mid)]
    }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var temp = null
    var position = 0
    // 如果有一个是空数组
    if (nums1.length == 0 || nums2.length == 0) {
        temp = nums1.concat(nums2)
        position = Math.floor(temp.length / 2)
        return temp.length % 2 == 0 ? (temp[position - 1] + temp[position]) / 2 : temp[position]
    }

    for (let i = 0; i < nums1.length; i++) {
        while (nums2[0] < nums1[i]) {
            nums1.splice(i, 0, nums2[0])
            nums2.shift()
            if (nums2.length == 0)
                break
        }
        if (nums2.length == 0)
            break
    }
    temp = nums1.concat(nums2)
    position = Math.floor(temp.length / 2)
    return temp.length % 2 == 0 ? (temp[position - 1] + temp[position]) / 2 : temp[position]
};