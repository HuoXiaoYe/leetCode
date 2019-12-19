/*给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

示例 1:
输入: dividend = 10, divisor = 3
输出: 3

示例 2:
输入: dividend = 7, divisor = -3
输出: -2
*/


/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // 负数的问题
    let res = 0;
    let pre = dividend * divisor > 0 ? false : true 
    dividend = dividend<0?Math.abs(dividend):dividend
    divisor = divisor<0?Math.abs(divisor):divisor
    while(true){
        if(dividend<divisor) break
        dividend = dividend - divisor;
        res++
    }
    return pre ? -res : res
};