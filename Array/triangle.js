/**
 * Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

 For example, given the following triangle
 [
 [2],
 [3,4],
 [6,5,7],
 [4,1,8,3]
 ]
 The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

 Note:
 Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

 Show Tags

 */
/**
 * Solution 1: 172ms. 题目没说清，其实triangle中意味着
 * 0只能和下一行的1，2相加，
 * 1只能和1,2，
 * 2和2，3
 *
 * 所以使用一个vector 采用动态规划，从下往上遍历。vector每一层储存到该点的最小值。所以遍历到vector[0][0]便是从上到下的最小路径。
 */
var minimumTotal = function(triangle) {
    if(!triangle) return 0;
    if(triangle.length == 1) return triangle[0][0];

    var vector = new Array(triangle.length);
    for(var i = 0; i < triangle.length; i++)
        vector[i] = new Array(triangle[i].length);
    vector[triangle.length - 1] = triangle[triangle.length - 1];

    for(var i = triangle.length - 2; i >= 0 ; i--){
        for(var j = 0; j < triangle[i].length ; j++){
                vector[i][j] = Math.min(vector[i+1][j+1], vector[i+1][j]) + triangle[i][j];
        }
    }

    return vector[0][0];
};


var t1 =  [
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]
];

var t2 = [[-1],[2,3],[1,-1,-3]];

console.log(minimumTotal(t1));
console.log(minimumTotal(t2));