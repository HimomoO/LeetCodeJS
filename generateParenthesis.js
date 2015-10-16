/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 For example, given n = 3, a solution set is:

 "((()))", "(()())", "(())()", "()(())", "()()()"

 */

/**
 * @param {number} n
 * @return {string[]}
 */

/**
 * Solution 1: 将左括号和右括号的初始值都设置成0，左括号必须永远在右括号前出现。故使用递归的方法来按照条件排序
 * 需要注意的是排序条件，有些条件会有重叠，需要精简
 * 1. left == n, right == n，停止向下，push到结果数组
 * 2. right > left, 无意义，return
 * 3. left > right 并等于 n 时，下一位只有可能是")"，right++
 * 4. 剩余情况下，只要 left != n, 不论 left == right 或 left > right 左括号右括号都可以任意出现在下一位
 */
var generateParenthesis = function(n) {
    var res = [];

    function convert(left,right,str){
        if( left == n && right == n ){
            res.push(str);
            return;
        }
        if(right > left) return;

        if(left < n){
            convert(left,right+1,str+")");
            convert(left+1,right,str+"(");
        }

        if(left > right && left == n) convert(left,right+1,str+")");
    }

    convert(1,0,"(");

    return res;
};

console.log(generateParenthesis(2));