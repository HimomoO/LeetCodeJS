/**
 * Created by HimomoO on 11/20/15.
 */
/**
 * Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

 click to show follow up.

 Follow up:
 Did you use extra space?
 A straight forward solution using O(mn) space is probably a bad idea.
 A simple improvement uses O(m + n) space, but still not the best solution.
 Could you devise a constant space solution?

 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if(matrix.length === 0) return;
    var flag = [];
    var i = 0;
    while(i < matrix.length){

    }

};

var t1 = [
    [1,2,3,4],
    [2,0,1,3]
];
var t2 = [
    [1,2,3,4],
    [2,6,1,3]
];

console.log(setZeroes(t1));
console.log(setZeroes(t2));