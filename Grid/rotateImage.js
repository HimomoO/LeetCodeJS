/**
 * Created by HimomoO on 11/6/15.
 */
/**
 * You are given an n x n 2D matrix representing an image.

 Rotate the image by 90 degrees (clockwise).

 Follow up:
 Could you do this in-place?

 */

/**
 *
 * Solution 1: 148ms. 先对角线对折，在上下翻转
 * 对角线对折： i < end, j < i
 * 左右翻转： i < end, j < end/2
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
    if(matrix.length == 0) return;
    var end = matrix.length;

    var tmpVal;
    for( var i = 0; i < end ; i++){
        for(var j = 0; j < i; j++){
            tmpVal = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmpVal;
        }
    }

    for(var i = 0; i < end; i++){
        for(var j = 0; j < end / 2; j++){
            tmpVal = matrix[i][j];
            matrix[i][j] = matrix[i][end - 1 - j];
            matrix[i][end - 1 - j] = tmpVal;
        }
    }

    return;
};

var x1 = [
        [0,0,1],
        [1,1,0],
        [1,0,0]
        ];
var x2 = [
    [2,0],
    [0,2]
];

var x3 = [[]];
var x4 = [[1]];
var x5 = [
    [0,0,0,1],
    [0,0,0,0],
    [1,0,0,1],
    [0,0,0,0]
];
//var x6 = [
//    [0,0,0,0,1],
//    [0,0,0,0,0],
//    [0,0,0,0,0],
//    [0,0,0,0,0],
//    [0,0,0,0,0]
//];
var x6 = [
    [1,2],
    [3,4]
];

console.log(rotate(x1));
console.log(rotate(x2));
console.log(rotate(x3));
console.log(rotate(x4));
console.log(rotate(x5));
console.log(rotate(x6));