/**
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

 For example:
 Given the below binary tree and sum = 22,
         5
        / \
       4   8
      /   / \
     11  13  4
    /  \      \
   7    2      1
 return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Solution 1: Recursion. 448ms.
 */
var hasPathSum = function(root, sum) {
    if(!root) return false;
    console.log(root.val);

    if(sum - root.val == 0 && root.left == null && root.right == null) return true;

    return hasPathSum(root.left,sum - root.val) || hasPathSum(root.right,sum - root.val);
};

var x1 = new TreeNode(5);
var x2 = new TreeNode(4);
var x3 = new TreeNode(8);
var x4 = new TreeNode(11);
var x5 = new TreeNode(13);
var x6 = new TreeNode(4);
var x7 = new TreeNode(7);
var x8 = new TreeNode(2);
var x9 = new TreeNode(1);

x1.left = x2;
x1.right = x3;
x2.left = x4;
x3.left = x5;
x3.right = x6;
//x4.left = x7;
//x4.right = x8;
//x6.right = x9;

console.log(hasPathSum(x1,80));