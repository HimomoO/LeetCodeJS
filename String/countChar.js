/**
 * Created by HimomoO on 11/10/15.
 */
/**
 * coding: input "aabbb", return "a2b3"
 input "aaabccaa", return “a3b1c2a2"

 */

/**
 * Solution 1: 向后遍历，如果和tmp一样则加一，不一样则赋值给tmp，把tmp+n推到res数列里
 */
//function count(str){
//    if(str.length == 0) return '';
//    var tmp = str[0];
//    var n = 0;
//    var res = '';
//
//    for(var i = 0; i < str.length; i++){
//
//        if(str[i] == tmp)
//            n++;
//        if((str[i] != tmp && n != 0)){
//            res += tmp + n + '';
//            tmp = str[i];
//            n = 1;
//        }
//        if(i == str.length - 1) res += tmp + n + '';
//    }
//
//    return res;
//}

/**
 * Solution 2: 如果要求在原string上修改
 */
function count(str){
    if(str.length == 0) return '';
    var tmp = str[0];
    var n = 0;
    var i = 0;

    while( i <= str.length ){
        if(str[i] == tmp){
            str[i] = '';
            n++;
            //i--;
        }

        if((str[i] != tmp && n != 0)){
            str[i] += n + '';
            tmp = str[i];
            n = 1;
        }
        if(i == str.length - 1) str +=  n + '';
    }

    return str;
}
var s1 = 'aabbb';
var s2 = 'aaabccaa';

console.log(count(s1));  //a2b3
console.log(count(s2));  //a3b1c2a2