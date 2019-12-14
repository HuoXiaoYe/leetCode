/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:
输入: "()"
输出: true

示例 2:
输入: "()[]{}"
输出: true

示例 3:
输入: "(]"
输出: false

示例 4:
输入: "([)]"
输出: false

示例 5:
输入: "{[]}"
输出: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        '(':')',
        '{':'}',
        '[':']'
    }
    let left = Object.keys(map);
    let right = Object.values(map);
    let arr = []; // 只存左括号
    for(let item of s){
        if(left.indexOf(item)!==-1){ // 左括号 进栈
            arr.push(item)
        }else{ // 右括号 左括号栈的最后一个出栈
            let cur = arr.pop();
            if(map[cur] !== item){ //匹配失败
                return false
            }
        }
    }
    return arr.length ? false : true
};