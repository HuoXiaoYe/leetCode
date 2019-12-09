

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