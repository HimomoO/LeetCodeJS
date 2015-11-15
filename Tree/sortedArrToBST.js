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


var x1 = new TreeNode(0);
var x2 = new TreeNode(1);
var x3 = new TreeNode(2);
var x4 = new TreeNode(3);
var x5 = new TreeNode(4);

var y1 = new TreeNode(10);
var y2 = new TreeNode(5);
var y3 = new TreeNode(15);
var y4 = new TreeNode(6);
var y5 = new TreeNode(20);

x2.right = x3;
x2.left = x4;

//y1.left = y2;
y1.right = y3;
//y2.right = y3;
y3.left = y4;
y3.right = y5; //[10,5,15,null,null,6,20]

console.log(sortedArrayToBST(null));
console.log(sortedArrayToBST(y1));