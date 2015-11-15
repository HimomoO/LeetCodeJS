/**
 * Created by HimomoO on 11/15/15.
 */
/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

 For example:
 Given binary tree {3,9,20,#,#,15,7},
      3
     / \
    9  20
      /  \
    15   7
 return its level order traversal as:
 [
 [3],
 [9,20],
 [15,7]
 ]

 */

/**
 * Solution 1: 180ms. 遍历然后按照每层深度来添加
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var res = [];
    traversal(root,0);

    function traversal(node,depth){
        if(node == null) return;

        if(typeof res[depth] == 'undefined') res[depth] = [node.val];
        else res[depth].push(node.val);

        traversal(node.left,depth+1);
        traversal(node.right,depth+1);
    }

    return res;
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
//y2.right = y3;
y3.left = y4;
y3.right = y5; //[10,5,15,null,null,6,20]

console.log(levelOrder(null));
console.log(levelOrder(y1));