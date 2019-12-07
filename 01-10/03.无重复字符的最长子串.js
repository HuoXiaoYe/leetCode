/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0
    let length = s.length;
    var lenArr = []
    for(let i=0;i<length;i++){
        let temp = [s[i]];
        for(j=i+1;j<length;j++){
            if(temp.indexOf(s[j])===-1){
                temp = [...temp,s[j]]
            }else{
                lenArr.push(temp.length);
                break
            }
        }
        lenArr.push(temp.length)
    }
    return lenArr.length ? Math.max(...lenArr) : 0
};