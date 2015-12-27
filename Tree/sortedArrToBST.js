/**
 * Created by HimomoO on 11/15/15.
 */
/**
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 *
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var t1 = [1,2,3,4,5,6,7];
var t2 = [-1,2,14,15,20,27];
var t3 = [1];
//var t4 =

console.log(sortedArrayToBST(t1));
console.log(sortedArrayToBST(t2));
console.log(sortedArrayToBST(t3));