/**
 * Given a m x n grid filled with non-negative numbers,
 * find a path from top left to bottom right which minimizes the sum of all numbers along its path.

 Note: You can only move either down or right at any point in time.

 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * Solution 1: 134ms. 使用一个名为sum的二维数组，存储grid对应位置的走法最小值。
 * 第一步先算 m,n 的大小。注意！！grid 对应的数值位置应该是 grid[n][m]
 * 第二步，计算当 n = 0和 m = 0的条件下的sum对应值（因为走到那里只有一种直线走法）
 * 第三步，使用两层嵌套循环遍历计算在 m,n 范围内，剩下的格子的最小走法值。从各等于1的时候开始填补起
 *
 * 最后返回sum(n,m)
 */
var minPathSum = function(grid) {
    if(grid == null) return null;
    if(grid.length == 0) return null;

    var n = grid.length - 1;
    var m = grid[0].length - 1;

    var sum = [];
    sum[0] = new Array(m+1);
    sum[0][0] = grid[0][0];

    for(var i = 1; i <= m ; i++){
        sum[0][i] = grid[0][i] + sum[0][i-1];
    }
    for(var i = 1; i <= n ; i++){
        if(typeof sum[i] == 'undefined') sum[i] = new Array(m+1);

        sum[i][0] = grid[i][0] + sum[i-1][0];
    }

    for( var j = 1 ; j <= m ; j++ ){
        for( var k = 1; k <= n ; k++){
            sum[k][j] = Math.min(sum[k-1][j] + grid[k][j], sum[k][j-1] + grid[k][j]);
        }
    }

    return sum[n][m];
};

var test = [
    [1,2],
    [1,2]
    //[1,4],
    //[3,2],
    //[1,2]
];

console.log("the min val is " + minPathSum(test));