/**
 * Created by HimomoO on 11/11/15.
 */
/**
 *
 * Determine whether an integer is a palindrome. Do this without extra space.

 click to show spoilers.

 Some hints:
 Could negative integers be palindromes? (ie, -1)

 If you are thinking of converting the integer to string, note the restriction of using extra space.

 You could also try reversing an integer. However, if you have solved the problem "Reverse Integer",
 you know that the reversed integer might overflow. How would you handle such case?

 There is a more generic way of solving this problem.

 */
/**
 * Solution 1: 812ms. 使用cut的方法算出头尾然后一直往中间对比。缺点是在cut头的时候需要很多次循环
 * 注意几个情况
 * x < 0 不算回文，x < 10 始终回文
 * js没有java的int强制转换所以一定要转换成整数，否则会对比小数位并判断false
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x < 10) return true;

    var length = 1;
    while( x / length >= 10){
        length *= 10;
    }
    var left, right;

    while(x > 0){
        left = parseInt(x / length);
        right = x % 10;
        console.log('left:' + left+' right:'+right);

        if(left != right) return false;
        x = parseInt((x % length ) / 10);
        length /= 100;
    }

    return true;
};

var x1 = 12321;  //true
var x2 = 4;  //true;
var x3 = +12321; //true
var x4 = -12321; // true
var x5 = 0121; //true
var x6 = 123456789;   //false
var x7 = 0000121;  //true

console.log(isPalindrome(x1));
console.log(isPalindrome(x2));
console.log(isPalindrome(x3));
console.log(isPalindrome(x4));
console.log(isPalindrome(x5));
console.log(isPalindrome(x6));
console.log(isPalindrome(x7));
