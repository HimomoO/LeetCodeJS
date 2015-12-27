/**
 * Created by HimomoO on 11/15/15.
 */
/**
 * There is a fence with n posts, each post can be painted with one of the k colors.

 You have to paint all the posts such that no more than two adjacent fence posts have the same color.

 Return the total number of ways you can paint the fence.

 Note:
 n and k are non-negative integers.

 */

/**
 * Solution : 152ms.
 * 根据题意，不能有超过连续两根柱子是一个颜色，也就意味着第三根柱子要么根第一个柱子不是一个颜色，要么跟第二根柱子不是一个颜色。
 * 假设dp[1]是第一根柱子及之前涂色的可能性数量，dp[2]是第二根柱子及之前涂色的可能性数量，则dp[3]=(k-1)*dp[1] + (k-1)*dp[2]。
 *
 * 所有柱子中第一根涂色的方式有k中，第二根涂色的方式则是k*k，因为第二根柱子可以和第一根一样。
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    var count = new Array(n+1);
    count[0] = 0;
    count[1] = k;
    count[2] = k*k;

    for(var i = 3; i <= n; i++){
        count[i] = (k - 1) * (count[i-1] + count[i-2]);
    }

    return count[n];
};

var n1 = 1,k1 = 1;  //1
var n2 = 1,k2 = 2;  //2
var n3 = 1,k3 = 6;  //6
var n4 = 2,k4 = 1;  //null
var n5 = 2,k5 = 3;  //9
var n6 = 3,k6 = 2;  //2
var n7 = 3,k7 = 4;  //36

console.log(numWays(n1,k1));
console.log(numWays(n2,k2));
console.log(numWays(n3,k3));
console.log(numWays(n4,k4));
console.log(numWays(n5,k5));
console.log(numWays(n6,k6));
console.log(numWays(n7,k7));