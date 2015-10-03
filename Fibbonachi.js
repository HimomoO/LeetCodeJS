/**
 * 下面代码求斐波那契数列第 n 项，斐波那契数列第一和第二项是 1 ，后面每一项是前两项之和，即 1 、 1 、 2 、 3 、 5 、 8 、 13 　．．．。
 */

/**
 * 递归方法
 * @param n
 * @returns {*}
 */

var fibbo1 = function(n){
    if( n == 1 || n == 2) return 1;
    else
        return fibbo1(n-1) + fibbo1(n - 2);

}

/**
 * 非递归方法
 * @param n
 * @returns {number}
 */
var fibbo2 = function(n){
    if( n == 1 || n == 2) return 1;

    var result = 0;
    var last1 = 1, last2 = 1;

    for( var i = 3; i <= n ; i++){
        result = last1 + last2;
        last1 = last2;
        last2 = result;
    }

    return result;

}

console.log("the final result is " + fibbo2(7));