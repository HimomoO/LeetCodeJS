/**
 * Created by HimomoO on 11/15/15.
 */
/**
 * Given a binary tree, return all root-to-leaf paths.

 For example, given the following binary tree:

     1
   /   \
  2     3
   \
    5
 All root-to-leaf paths are:

 ["1->2->5", "1->3"]

 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Solution 1: 180ms. 遍历。注意边界情况的改变
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var res = [];

    function find(node,path){
        if(node.left === null && node.right === null) res.push(path);
        if(node.left !== null) find(node.left,path + '->' + node.left.val);
        if(node.right !== null) find(node.right,path + '->' + node.right.val);
    }

    if(root) find(root,''+root.val);
    return res;

};

var x1 = new TreeNode(0);
var x2 = new TreeNode(1);
var x3 = new TreeNode(2);
var x4 = new TreeNode(3);
var x5 = new TreeNode(5);

var y1 = new TreeNode(10);
var y2 = new TreeNode(5);
var y3 = new TreeNode(15);
var y4 = new TreeNode(6);
var y5 = new TreeNode(20);

x2.left = x3;
x2.right = x4;
x3.right = x5;

y1.left = y2;
y1.right = y3;
y2.right = y3;
y3.left = y4;
y3.right = y5; //[10,5,15,null,null,6,20]

console.log('res:'+binaryTreePaths(x2));
console.log('res:'+binaryTreePaths(y1));