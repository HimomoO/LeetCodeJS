/**
 * Created by HimomoO on 10/29/15.
 */
/**
 * Find the first repeating letter in a string: 给定一个strings，返回第一个duplicate。
 * 例如 s=abcba, return b.
 */

var findFirstDuplicate = function(str){
    str.replace(/\s/g,"");
    if(str.length === 0) return '';

    var tmp = new Array();
    var res = '';
    var Regx = /^[A-Za-z]*$/;

    for(var i = 0; i < str.length; i++){
        if(typeof  tmp['' + str[i]] == 'undefined' ) tmp['' + str[i]] = 1;
        else{
            if(Regx.test(str[i])){
                return str[i];
            }
        }
    }
    console.log(tmp);

    return res;
};

var s1 = 'abcba';
var s2 = '';
var s3 = '  ';
var s4 = 'abc123c';
var s5 = 'abcdacbaaaaabbbbbeeeee';

console.log('s1: ' + findFirstDuplicate(s1));  //a
console.log('s2: ' + findFirstDuplicate(s2));  //null
console.log('s3: ' + findFirstDuplicate(s3));  //null
console.log('s4: ' + findFirstDuplicate(s4));  //c
console.log('s5: ' + findFirstDuplicate(s5));  //c
