/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let s = Math.floor(num / 1000);
    let h = Math.floor(num % 1000 /100);
    let t = Math.floor(num % 1000 % 100 / 10); 
    let g = Math.floor(num % 1000 % 100 % 10);
    let str = "";
    if(s){
        str += Array(s).fill("I").join("") + "M";
    }
    if(h){
        let pre = ""
        if(h==9){ // 900
            pre = "CM"
        }else if(h>5){
            pre = "D" + Array(h-5).fill("I").join("")+"C"
        }else if(h==4){
            pre = "CD"
        }else{
            pre = Array(h).fill("I").join("")+"C"
        }
        str += pre
    }
    if(t){ // 十位
        let pre = ""
        if(t==9){
            pre = "XC"
        }else if(t>5){
            pre = "L" + Array(t-5).fill("I").join("")+"X"
        }else if(t==4){
            pre = "CL"
        }else{
            pre = Array(t).fill("I").join("")+"X"
        }
        str += pre
    }
     if(g){
        let pre = ""
        if(g==9){ 
            pre = "IX"
        }else if(g>5){
            pre = "V" + Array(g-5).fill("I").join("")
        }else if(g==4){
            pre = "IV"
        }else{
            pre = Array(g).fill("I").join("")
        }
        str += pre
    }
    return str
};

console.log(intToRoman(58))