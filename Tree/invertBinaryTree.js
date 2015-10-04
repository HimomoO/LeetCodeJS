/**
 * Invert a binary tree.

       4
     /    \
    2     7
   / \   / \
  1   3 6   9
 to
       4
     /   \
    7     2
   / \   / \
  9   6 3   1

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Solution 2 : Recursion
 * @param root
 * @returns {*}
 */

var invertTree = function(root) {
    var rootTmp = root;
    var left = root.left, right = root.right;

    while(root !== null){

    }
};

/**
 * Solution 1 : Recursion
 * @param root
 * @returns {*}
 */
//var invertTree = function(root) {
//    var tmp;
//
//    function helper(node){
//
//        if( node !== null) {
//            tmp = node.left;
//            node.left = node.right;
//            node.right = tmp;
//
//            helper(node.left);
//            helper(node.right);
//        }
//    }
//    helper(root);
//
//    return root;
//};

var x1 = new TreeNode(4);
var x2 = new TreeNode(2);
var x3 = new TreeNode(7);
var x4 = new TreeNode(1);
var x5 = new TreeNode(3);
var x6 = new TreeNode(6);
var x7 = new TreeNode(9);

x1.left = x2;
x1.right = x3;
x2.left = x4;
x2.right = x5;
x3.left = x6;
x3.right = x7;

console.log(invertTree(x1));