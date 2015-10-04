/**
 * Given a binary tree, return the inorder traversal of its nodes' values.

 For example:
 Given binary tree {1,#,2,3},
   1
    \
    2
   /
  3
 return [1,3,2].

 中序遍历: LNR

 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = [];

    function cal(node){
        if(node !== null ){
            cal(node.left);
            result.push(node.val);
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
//x3.left = x4;
//x3.right = x5;

console.log(inorderTraversal(x1));