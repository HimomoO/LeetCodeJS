/**
 * Created by HimomoO on 11/15/15.
 */
/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).

 Assume a BST is defined as follows:

 The left subtree of a node contains only nodes with keys less than the node's key.
 The right subtree of a node contains only nodes with keys greater than the node's key.
 Both the left and right subtrees must also be binary search trees.

 confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 *
 * Solution 1: Recursion. 每层遍历都要记得用上一轮的值更新最大最小值区间
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    function valid(node,min,max) {
        if(node === null) return true;

        if(node.val <= min || node.val >= max) return false;

        return valid(node.left,min,node.val) && valid(node.right,node.val,max);
    }

    return valid(root,Math.MIN_VALUE,Math.MAX_VALUE);
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
x3.left = x4;

y1.left = y2;
y1.right = y3;
y2.right = y3;
y3.left = y4;
y3.right = y5; //[10,5,15,null,null,6,20]

console.log('res:'+isValidBST(x2));
console.log('res:'+isValidBST(y1));