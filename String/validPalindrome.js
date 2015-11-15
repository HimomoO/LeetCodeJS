/**
 * Created by HimomoO on 11/11/15.
 */
/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 For example,
 "A man, a plan, a canal: Panama" is a palindrome.
 "race a car" is not a palindrome.

 Note:
 Have you consider that the string might be empty? This is a good question to ask during an interview.

 For the purpose of this problem, we define empty string as valid palindrome.

 */

/**
 * Solution 1: 300ms. 从后扫一遍从前扫一遍，如果是valid char 就放进去。注意
 * 数字也是有效字符，但是' '跟数字对比的时候似乎==0，所以必须要排除在外
 * 这个方法就是扫的效率低，并且每次需要对比很多。。
 * @param {string} s
 * @return {boolean}
 */
//var isPalindrome = function(s) {
//    if(s.length <= 1) return true;
//    var start = [],end = [];
//
//    for(var i = 0; i <= s.length - 1; i++){
//        if((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z'|| (s[i] != ' ' && s[i] >= 0 && s[i] <= 9))){
//            //console.log(s[i]);
//            start.push(s[i]);
//        }
//    }
//    for(var i = s.length - 1; i >= 0; i--){
//        if((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z') || (s[i] != ' ' &&s[i] >= 0 && s[i] <= 9)){
//            //console.log(s[i]);
//            end.push(s[i]);
//        }
//    }
//
//    for(var x in start){
//        if(start[x].toLowerCase() != end[x].toLowerCase()) return false;
//    }
//
//    return true;
//};

/**
 * Solution 1: 300ms. 从后扫一遍从前扫一遍，如果是valid char 就放进去。注意
 * 数字也是有效字符，但是' '跟数字对比的时候似乎==0，所以必须要排除在外
 * 这个方法就是扫的效率低，并且每次需要对比很多。。
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length <= 1) return true;
    var i = 0, end = s.length - 1;
    var left, right;

    while(end > i){
        while( (s[i] < 'a' && s[i] > 'z') || (s[i] < 'A' && s[i] > 'Z')|| s[i] == ' ' ||( s[i] < 0 && s[i] > 9)){
            i++;
        }
        while( (s[end] < 'a' && s[end] > 'z') || (s[end] < 'A' && s[end] > 'Z')|| s[end] == ' ' ||( s[end] < 0 && s[end] > 9)){
            end--;
        }
        console.log(s[i] + ' vs ' + s[end]);
        if(s[i].toLowerCase() != s[end].toLowerCase()) return false;
        i++;
        end--;
        //console.log(i);
        //console.log(end);
    }

    return true;
};

var s1 = 'A man, a plan, a canal: Panama';  //true
var s2 = 'race a car'; //false
var s3 = '';   //true
var s4 = ' ';  //true
var s5 = '1a2';  //false
var s6 = 'a ba'; //true

console.log(isPalindrome(s1));
console.log(isPalindrome(s2));
console.log(isPalindrome(s3));
console.log(isPalindrome(s4));
console.log(isPalindrome(s5));
console.log(isPalindrome(s6));