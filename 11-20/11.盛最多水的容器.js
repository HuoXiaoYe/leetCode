/*给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 
(i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 
和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。*/


/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力算法
var maxArea = function (height) {
    var maxV = 0;
    for (var i = 0; i < height.length; i++) {
        for (j = i + 1; j < height.length; j++) {
            let v = (Math.min(height[i], height[j])) * (j - i)
            maxV = v > maxV ? v : maxV
        }
    }
    return maxV
};
