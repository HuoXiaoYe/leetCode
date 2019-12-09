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
    if (numRows<=1) return s
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

console.log(convert("A", 1))