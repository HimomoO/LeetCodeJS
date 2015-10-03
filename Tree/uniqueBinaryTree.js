/**
 *
 * Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

 For example,
 Given n = 3, there are a total of 5 unique BST's.

 1         3     3      2      1
 \       /     /      / \      \
 3     2     1      1   3      2
 /     /       \                 \
 2     1         2                 3

 */

/**
 * @param {number} n
 * @return {number}
 */

/**
 * http://www.tuicool.com/articles/FVVJba7
 * http://blog.csdn.net/jiadebin890724/article/details/23305915
 * @param n
 * @returns {number}
 */
var numTrees = function(n) {
 if( n == 0 ) return 0;
 if( n == 1 ) return 1;

 var result = 0;

 for( var i = 1; i <= n ; i++){
      cal(i);
 }

 function cal(i){

 }

};