/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

 The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

 How many possible unique paths are there?

 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/**
 * Solution 3: 建立于solution 2上的解法，创建二维数组来储存下一层数据，故此不用层层递归和反复运算 124ms
 * 注意：
 * 1. js的二维数组跟其他不一样，一定要先初始化一维成二维数组： tmp[0] = new Array(); 否则可能null pointer
 *
 */
var uniquePaths = function(m, n) {
    var tmp = [];
    tmp[0] = new Array();

    for(var i = 0; i < n; i++) {
        tmp[0][i] = 1;
    }

    for(var i = 0; i < m; i++) {
        if (typeof tmp[i] == 'undefined')
            tmp[i] = new Array();
        tmp[i][0] = 1;
    }

    for(var i = 1; i < m; i++){
        for(var j = 1; j < n; j++){
            tmp[i][j] = tmp[i-1][j] + tmp[i][j-1];
        }
    }

    return tmp[m-1][n-1];
};

/**
 * Solution 2: 动态规划 + 递归, LTE。每走到一个点x,y的走法总是走到(x-1,y)再向右和走到(x,y-1)向下的总和，
 * 故f(x,y) = f(x-1,y) + f(x,y-1)
 * 而边界条件是： f(1,y) == f(x,1) == 1
 *
 */
//var uniquePaths = function(m, n) {
//    if( m == 1 || n == 1) return 1;
//
//    return uniquePaths(m-1,n) + uniquePaths(m,n-1);
//};

/**
 * Solution 1: Recursion： LTE
 */
//var uniquePaths = function(m, n) {
//    var res = 0;
//
//    function go(down,right, length){
//        if(down != 0){
//            go(down-1,right,length-1);
//        }
//        if(right != 0){
//            go(down,right-1,length-1);
//        }
//        if(length === 0){
//            res++;
//        }
//    }
//
//    go(m - 1,n - 1,m + n - 2);
//
//    return res;
//};

console.log(uniquePaths(1,3));