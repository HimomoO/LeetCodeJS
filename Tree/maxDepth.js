/**
 * Created by HimomoO on 11/11/15.
 */
/**
 * Given a binary tree, find its maximum depth.

 The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 */

/**
 * Solution 1: 如果要求返回的是深度值
 * @param {TreeNode} root
 * @return {number}
 */
//var maxDepth = function(root) {
//    if(!root) return 0;
//
//    return 1+ Math.max(maxDepth(root.left),maxDepth(root.right));
//
//};
/**
 * Solution 2: 如果要求返回的是node
 */
var maxDepth = function(root) {
    if(!root) return 0;

    var deepestNode;
    var max = 0;

    find(root,0);

    function find(node,depth){
        if(node.left == null && node.right == null){
            if(max == 0 || depth > max ){
                max = depth;
                deepestNode = node;
            }
        }
        if(node.left != null) find(node.left,depth+1);
        if(node.right != null) find(node.right,depth+1);
    }

    return deepestNode;
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

var y1 = new TreeNode(0);
var y2 = new TreeNode(1);
var y3 = new TreeNode(2);
var y4 = new TreeNode(3);
var y5 = new TreeNode(4);

x1.left = x2;
x1.right = x3;

y1.right = y2;
y2.right = y3;
y3.right = y4;
y4.right = y5;

console.log('res:'+maxDepth(x1).val);
console.log('res:'+maxDepth(y1).val);