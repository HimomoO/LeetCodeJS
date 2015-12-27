/**
 * Created by HimomoO on 11/19/15.
 */
/**
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

 For example,
 If n = 4 and k = 2, a solution is:

 [
 [2,4],
 [3,4],
 [2,3],
 [1,2],
 [1,3],
 [1,4],
 ]

 */
/**
 * Solution 1: 204ms. 递归。设置start阀值，每次往下走新start为i+1，则不会重复遍历已经读取过的值。下次可以考虑非递归解法。
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var res = [];
    if( n <= 0 || n < k) return res;

    function cal(start,solutions){
        if(solutions.length == k){
            res.push(solutions);
            return;
        }
        for(var i = start; i <= n; i++) cal(i+1,solutions.concat(i));
    }
    cal(1,[]);
    return res;
};

var n1 = 4, k1 = 2;
var n2 = 4, k2 = 1;  //4

console.log(combine(n1,k1));
console.log(combine(n2,k2));

