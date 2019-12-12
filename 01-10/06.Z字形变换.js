/*
将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
请你实现这个将字符串进行指定行数变换的函数：
string convert(string s, int numRows);
*/

var convert = function (s, numRows) {
    if (numRows <= 1) return s
    let n = Math.floor(s.length / (numRows * 2 - 2));
    let extra = s.length % (numRows * 2 - 2);
    let extraN = extra > 0 ? (extra > numRows ? 2 : 1) : 0
    let loop = 2 * n + extraN;
    // let arr = Array(numRows).fill([]);
    let arr = []
    for (var i = 0; i < numRows; i++) {
        arr[i] = []
    }
    for (let i = 0; i < loop; i++) { // 0 2 4
        if (i % 2 !== 0) { // 偶数列 //
            for (var j = numRows - 2; j >= 1; j--) {
                console.log(j, '==', i, '=====', s[0])
                arr[j][i] = s[0];
                console.log(arr[j][i])
                s = s.slice(1);
            }
        } else { // 奇数列
            for (var j = 0; j < numRows; j++) {
                // console.log(j, '==', i, '=====', s[0])
                arr[j][i] = s[0];
                // console.log(arr,j)
                s = s.slice(1)
            }
        }
    }
    // console.log(arr)
    var res = "";
    arr.forEach((item) => {
        res += item.join("")
    })
    // console.log(res)
    return res
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    var a = "";
    var g = 2 * (numRows - 1);
    if (numRows < 2) return s;
    for (var j = 0; j < numRows; j++) {
        var b = "";
        var c = s.length / numRows;
        for (var i = 0; i <= c; i++) {
            if (j != 0 && j != (numRows - 1) && i > 0) {
                b += s.substr((i * g) - j, 1);
            }
            b += s.substr(j + i * g, 1)
        }
        a += b;
    }
    return a;
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