var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ''
    let arr = [];
    let mixLen = strs[0].length;
    strs.forEach((item, i) => {
        arr[i] = [];
        arr[i] = [...item]
        mixLen = item.length < mixLen ? item.length : mixLen;
    })
    let maxPre = "";
    for (var i = 0; i < mixLen; i++) {
        let flag = true;
        let temp = arr[0][i]
        for (var j = 1; j < arr.length; j++) {
            if (temp !== arr[j][i]) {
                flag = false;
                break
            }
        }
        if (flag) {
            maxPre += temp;
        } else {
            break
        }
    }
    return maxPre
};

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ''
    
}

// sort() 按照字母排序
var longestCommonPrefix = function(strs) {
    strs.sort() // 按照字母顺序排序
    if (strs.length === 0) return ''
    let first = strs[0]
    let end = strs[strs.length - 1]
    let exp = new RegExp(`^${first}`)
    if (first === end || end.match(exp)) return first
    for (let i = 0; i < first.length; i++) {
        if (first[i] !== end[i]) {
            return first.slice(0, i)
        }
    }
};