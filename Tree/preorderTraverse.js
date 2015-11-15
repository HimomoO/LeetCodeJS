
/**
 *Given a binary tree, return the preorder traversal of its nodes' values.

 For example:
 Given binary tree {1,#,2,3},
 1
 \
 2
 /
 3
 return [1,2,3].

 前序遍历： NLR
 */

/**
 * Solution 1: using traversal solugion
 * @param val
 * @constructor
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var preorderTraversal = function(root) {
    var result = [];

    function cal(node){
        if(node !== null ){
            result.push(node.val);
            cal(node.left);
            cal(node.right);
        }
    }

    cal(root);
    return result;
};

var x1 = new TreeNode(0);
var x2 = new TreeNode(1);
var x3 = new TreeNode(2);
var x4 = new TreeNode(3);
var x5 = new TreeNode(4);

x1.right = x2;
x2.left = x3;
x3.left = x4;
x3.right = x5;

console.log(preorderTraversal(x1));