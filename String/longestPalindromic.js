/**
 * Created by HimomoO on 11/6/15.
 */
/**
 * Given a string S, find the longest palindromic substring in S.
 * You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
 */

/**
 * SOlution 1: LTE, 扫每一个点的回文数长，找最大
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <= 1) return s;
    var max = 0;
    var res = '';

    for(var i = 0; i < s.length - 1; i++){
        if(s[i] && s[i+1] && s[i] == s[i+1]){   //abba
            find(2,i-1,i+2,s[i]+s[i+1]);
        }
        if(s[i-1]&& s[i+1]&&s[i-1] == s[i+1]){  //aba
            find(1,i-1,i+1,s[i]);
        }
    }

    function find(l,start1,start2,str){
        while(s[start1] == s[start2]) {
            if(typeof s[start1] == 'undefined' || typeof s[start2] == 'undefined') break;
            str = s[start1]+str+s[start2];
            l+=2;
            start1--;
            start2++;
        }
        if(l>max){
            max = l;
            res = str;
        }
        return;
    }
    return res;
};

var s1 = '';     //
var s2 = '1';    //1
var s3 = 'aba';  //aba
var s4 = 'abba'; //abba
var s5 = '12sdf9234eeefffeee020340';  //eeefffeee
var s6 = '11122e2111';  //111
var s7 = '111 222 111'; //111 222 111
var s8 = 'bb'; //bb
var s9 = 'ccc'; //ccc

console.log('res:' + longestPalindrome(s1));
console.log('res:' + longestPalindrome(s2));
console.log('res:' + longestPalindrome(s3));
console.log('res:' + longestPalindrome(s4));
console.log('res:' + longestPalindrome(s5));
console.log('res:' + longestPalindrome(s6));
console.log('res:' + longestPalindrome(s7));
console.log('res:' + longestPalindrome(s8));
console.log('res:' + longestPalindrome(s9));