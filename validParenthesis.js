/**
 * Created by HimomoO on 10/29/15.
 */
/**
 * Given a string of parantheses, check if the string is valid. ex: [[]] is valid, ][][ is not valid
 */

/**
 * Solution: 使用 tmp['left] 数组储存[的数量，
 *  遍历数组，如果出现 [ 则++，如果出现 ] 则--。
 *  当出现 ] 并 left 的值已经等于0的时候，返回false
 */
var validParenthesis = function(str){
    if(str.length == 0) return true;
    if(str.length < 1) return false;
    var tmp = new Array();
    tmp['left'] = 0;

    for(var i = 0; i < str.length ; i++){
        if(str[i] == '[')
            tmp['left']++;
        else{
            if(tmp['left'] == 0)
                return false;
            else {
                tmp['left']--;
            }
        }
    }

    if(tmp['left'] == 0) return true;
    else return false;
};

var s1 = '';     //true
var s2 = '[';    //false
var s3 = ']';    //false
var s4 = '[[]]'; //true
var s5 = '][]['; //false
var s6 = '[[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]'; //true

console.log('1: ' + validParenthesis(s1));
console.log('2: ' + validParenthesis(s2));
console.log('3: ' + validParenthesis(s3));
console.log('4: ' + validParenthesis(s4));
console.log('5: ' + validParenthesis(s5));
console.log('6: ' + validParenthesis(s6));
