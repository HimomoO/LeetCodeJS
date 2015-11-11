/**
 * Created by HimomoO on 11/10/15.
 */
/**
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

 If the last word does not exist, return 0.

 Note: A word is defined as a character sequence consists of non-space characters only.

 For example,
 Given s = "Hello World",
 return 5.

 */

/**
 * Solution 1: 向前遍历，注意全是空和一堆空和完全没有空的情况。有时候replace并不一定需要用
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //s.replace(/\s*$/,'');
    var res = 0;
    var l = s.length;

    while(l >= 1){
        l--;
        if(s[l] == ' ' && res === 0) continue;
        if(s[l] == ' ' && res !== 0) break;

        res++;
    }

    return res;
};

var s1 = '     ';
var s2 = 'hello World';
var s3 = 'hjk hjk oiu uio bjk    ';
var s4 = 'ororoorororor';

console.log('start'+lengthOfLastWord(s1)+'end');
console.log('start'+lengthOfLastWord(s2)+'end');
console.log('start'+lengthOfLastWord(s3)+'end');
console.log('start'+lengthOfLastWord(s4)+'end');
