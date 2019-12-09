/*给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:*/
var reverse = function (x) {
    var res = 0;
    if (x == 0) {
        return res
    }
    if (x < 0) {
        let s = x.toString().slice(1).split("").reverse().join("");
        if (s[0] == "0") {
            s = s.slice(1)
        }
        res = Number("-" + s)
    } else {
        let s = x.toString().split("").reverse().join("");
        if (s[0] == "0") {
            s = s.slice(1)
        }
        res = Number(s)
    }
    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1){
        return 0
    }
    return res

};