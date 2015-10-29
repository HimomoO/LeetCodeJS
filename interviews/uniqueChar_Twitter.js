/**
 * Created by HimomoO on 10/29/15.
 */
/**
 * 2. 给一个stirng，return第一次出现的unique的字符.
 解法：用两个bucket，一个记录字符出现次数，一个记录字符出现位置

 */

var uniqueChar = function(str){
    if(str.length == 0) return null;

    var tmp = new Array();
    var res;

    for( var i = 0; i < str.length ; i++){
        if(typeof tmp[i] == 'undefined') tmp[i] = 1;
        else tmp[i]++;
    }

    for (var index in tmp) {

    }

};
var s1 = 'aabcbbd';  //3
var s2 = '';   //null
var s3 = 'b';  //0
var s4 = 'aabbccddeeff';  //null
var s5 = 'aabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffx';  //x

console.log('1: ' + uniqueChar(s1));
console.log('2: ' + uniqueChar(s2));
console.log('3: ' + uniqueChar(s3));
console.log('4: ' + uniqueChar(s4));
console.log('5: ' + uniqueChar(s5));