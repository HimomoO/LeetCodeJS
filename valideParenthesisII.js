/**
 * Created by HimomoO on 10/29/15.
 */
/**
 * Given a string of parantheses, check if the string is valid. ex: [[]] is valid, ][][ is not valid
 *
 * How would you solve if the parantheses could be of different types like {,[,(
 */

var validParenthesisII = function(str){
    if(str.length == 0) return true;
    if(str.length < 1) return false;
    var tmp = new Array();
    tmp['['] = 0;
    tmp['{'] = 0;
    tmp['('] = 0;
    var index;
    var last;

    for(var i = 0; i < str.length ; i++){

        if(str[i] == '[' || str[i] == '{' || str[i] == '(') {
            tmp[str[i]]++;
        }
        else if( str[i] == ']' || str[i] == '}' || str[i] == ')'){
            switch(str[i]) {
                case ']':
                    index = '[';
                    break;
                case '}':
                    index = '{';
                    break;
                case ')':
                    index = '(';
                    break;
            }
            if(tmp[index] == 0)
                return false;
            else {
                tmp[index]--;
            }
        }
    }

    return ((tmp['['] == 0) && (tmp['{'] == 0) && (tmp['('] == 0));
};
//
//var s1 = '';     //true
//var s2 = '[';    //false
//var s3 = ']';    //false
//var s4 = '[[]]'; //true
//var s5 = '][]['; //false
//var s6 = '[[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]'; //true

var t1 = '{}';    //true
var t2 = '()';    //true
var t3 = '[()]'; //true
var t4 = '][]{}[('; //false
var t5 = '[[][][][][][][][][][][][][][][][][][][][][][][]{}()([][][][])[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]'; //true
var t6 = '([)]';
//console.log('1: ' + validParenthesisII(s1));
//console.log('2: ' + validParenthesisII(s2));
//console.log('3: ' + validParenthesisII(s3));
//console.log('4: ' + validParenthesisII(s4));
//console.log('5: ' + validParenthesisII(s5));
//console.log('6: ' + validParenthesisII(s6));

console.log('t1: ' + validParenthesisII(t1));
console.log('t2: ' + validParenthesisII(t2));
console.log('t3: ' + validParenthesisII(t3));
console.log('t4: ' + validParenthesisII(t4));
console.log('t5: ' + validParenthesisII(t5));
console.log('t6: ' + validParenthesisII(t6));

