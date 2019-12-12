/*
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
示例:
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let arr = [];
    arr[2] = ["a","b","c"];
    arr[3] = ["d","e","f"];
    arr[4] = ["g","h","i"];
    arr[5] = ["j","k","l"];
    arr[6] = ["m","n","o"];
    arr[7] = ["p","q","r","s"];
    arr[8] = ["t","u","v"];
    arr[9] = ["w","x","y","z"];

    var digitsArr = [...digits]; // 不知道循环多少层 怎么办 //递归？？？
    let res = [];
    digitsArr.forEach((item)=>{
        let cur = arr[item];
        if(res.length == 0){
            res.push(...cur)
        }else{
            tempArr = []
            res.forEach((item1)=>{
                cur.forEach((item2)=>{
                    tempArr.push(item1+item2)
                })
            })
            res = tempArr
        }
    })
    return res
};