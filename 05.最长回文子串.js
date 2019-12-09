




var longestPalindrome = function (s) {
    if (!s || s.length < 2) {
        return s;
    }
    let start = 0, end = 0;
    let n = s.length;
    let centerExpend = (left, right) => {
        while (left >= 0 && right < n && s[left] == s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    for (let i = 0; i < n; i++) {
        let len1 = centerExpend(i, i);
        let len2 = centerExpend(i, i + 1);
        // 两种组合取最大回文串的长度
        let maxLen = Math.max(len1, len2);
        if (maxLen > end - start) {
            // 更新最大回文串的首尾字符索引
            start = i - ((maxLen - 1) >> 1);
            end = i + (maxLen >> 1);
        }
    }
    return s.substring(start, end + 1);
};


// start = i - ((maxLen - 1) >> 1);
// end = i + (maxLen >> 1);


/*
let maxLen = 10;
let i = 6
2^1 2^3
1010 => 10

1001 => 9
2^3+2^0=>9

start:
i - (( 1001 )>>1)
i - 100 => 6 - 4 = 2

end:
end = i + (maxLen >> 1);
6 + (1010 >> 1)== 6 + 101 == 6 + 5 == 11

start = 2  end = 11

*/

var longestPalindrome = (s) => {
    if (s.length < 2) return s;
    let length = s.length;
    let start = 0;
    let end = 0;
    function isPalindrome(start, end) {
        while (start >= 0 && end < length && s[start] == s[end]) {
            start--
            end++
        }
        return end - start - 1
    }

    for (let i = 0; i < length; i++) {
        let len1 = isPalindrome(i, i);
        let len2 = isPalindrome(i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - ((len - 1) >> 1)
            end = i + (len >> 1)
        }
    }
    return s.slice(start, end + 1)

}