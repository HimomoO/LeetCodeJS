/**
 * Created by HimomoO on 11/6/15.
 */
/**
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

 For "(()", the longest valid parentheses substring is "()", which has length = 2.

 Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.

 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if(s.length <= 1) return 0;

    var left = 0,right = 0;
    var max = 0;
    var tmp = 0;

    for(var i = 0; i < s.length ; i++){
        console.log('1: ' + s[i] + ' left:' + left);
        if(s[i] == '(') {
            left++;
            //tmp++;
        }
        if(s[i] == ')'){
            left--;
            if(left >= 0) {
                tmp += 2;
                console.log('left:' + left + ' tmp:' + tmp);
            }
            if(left < 0) {
                if (tmp > max) max = tmp;
                left = 0;
                tmp = 0;
            }
        }
        //console.log('left:' + left + ' tmp:' + tmp);
    }

    if(tmp > max && left >= 0) max = tmp;
    return max;
};

var s1 = '(()'; //2
var s2 = ')()())'; //4
var s3 = '';  //0
var s4 = ')'; //0
var s5 = '(()()()())'; //10
var s6 = '()(()'; //2
var s7 = '()'; //2

console.log(longestValidParentheses(s1));
console.log(longestValidParentheses(s2));
console.log(longestValidParentheses(s3));
console.log(longestValidParentheses(s4));
console.log(longestValidParentheses(s5));
console.log(longestValidParentheses(s6));
console.log(longestValidParentheses(s7));