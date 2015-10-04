/**
 * Given a binary tree, return the postorder traversal of its nodes' values.

 For example:
 Given binary tree {1,#,2,3},
     1
      \
      2
     /
    3
 return [3,2,1].

 Note: Recursive solution is trivial, could you do it iteratively?

 后序遍历： LRN

 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var postorderTraversal = function(root) {

    var result = [];

    function cal(node){
        if(node !== null ){
            cal(node.left);
            cal(node.right);

            result.push(node.val);
        }
    }

    cal(root);
    return result;
};

var x1 = new TreeNode(3);
var x2 = new TreeNode(1);
var x3 = new TreeNode(2);
var x4 = new TreeNode(4);
var x5 = new TreeNode(5);

x1.left = x2;
x1.right = x3;
//x3.left = x4;
//x2.right = x4;

console.log(postorderTraversal(x1));