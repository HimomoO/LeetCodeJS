/**
 * Created by HimomoO on 11/6/15.
 */
/**
 * Implement atoi to convert a string to an integer.

 Hint: Carefully consider all possible input cases. If you want a challenge,
 please do not see below and ask yourself what are the possible input cases.

 Notes: It is intended for this problem to be specified vaguely (ie, no given input specs).
 You are responsible to gather all the input requirements up front.

 */

/**
 * Solution 1: 192ms. 需要注意的点非常多.....回头再看看怎么省略
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(str.length === 0) return 0;

    str = str.replace(/^\s+/,'');  //!!/s/只删除单个空格，s+删除多个，^代表开头
    var positive = true;
    var start = 0;
    if(str[0] == '-'){
        positive = false;
        start = 1;
    }
    else if(str[0] == '+'){
        start = 1;
    }

    var res = 0;
    for(var i = start; i < str.length ; i++){
        if(str[i] == ' ') break;
        if(!isNaN(parseInt(str[i]))){
            res = res * 10 + parseInt(str[i]);
            if(res > 2147483647 && positive == true) return 2147483647;
            if(res > 2147483648 && positive == false) return -2147483648;
        }
        else break;
    }
    return positive?res:0-res;
};

var s1 = '';       //0
var s2 = '123';    //123
var s3 = '1ei23';  // 1
var s4 = '+123';   //123
var s5 = '-123';   //-123
var s6 = '   123'; //123
var s7 = '12 3';   //12
var s8 = '' + (Number.MAX_VALUE+1); //0
var s9 = '  -0012a42'; //-12
var s10 = '2147483648'; //2147483647
var s11 = '-2147483648'; //-2147483648
var s12 = '123  456'; //123

//console.log('res' + myAtoi(s1));
//console.log('res' + myAtoi(s2));
//console.log('res' + myAtoi(s3));
//console.log('res' + myAtoi(s4));
//console.log('res' + myAtoi(s5));
//console.log('res' + myAtoi(s6));
//console.log('res' + myAtoi(s7));
//console.log('res' + myAtoi(s8));

console.log((function(){ var res = myAtoi(s1); return res + ' is Num?' + isNaN(res)}()));
console.log((function(){ var res = myAtoi(s2); return res + ' is Num?' + isNaN(res)}()));
console.log((function(){ var res = myAtoi(s3); return res + ' is Num?' + isNaN(res)}()));
console.log((function(){ var res = myAtoi(s4); return res + ' is Num?' + isNaN(res)}()));
console.log((function(){ var res = myAtoi(s5); return res + ' is Num?' + isNaN(res)}()));
console.log((function(){ var res = myAtoi(s6); return res + ' is Num?' + isNaN(res)}()));
console.log((function(){ var res = myAtoi(s7); return res + ' is Num?' + isNaN(res)}()));
console.log((function(){ var res = myAtoi(s8); return res + ' is Num?' + isNaN(res)}()));
console.log((function(){ var res = myAtoi(s9); return res + ' is Num?' + isNaN(res)}()));
console.log((function(){ var res = myAtoi(s10); return res + ' is Num?' + isNaN(res)}()));
console.log((function(){ var res = myAtoi(s11); return res + ' is Num?' + isNaN(res)}()));
console.log((function(){ var res = myAtoi(s12); return res + ' is Num?' + isNaN(res)}()));