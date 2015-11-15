/**
 * Created by HimomoO on 11/11/15.
 */
/**
 Given a binary tree, find its minimum depth.

 The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

 */

/**
 *
 * Solution 1: 150ms. 若左右只有一个节点也算深度+1
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root == null) return 0;

    var min = find(0,root);
    function find(step,node){

        if(node == null){
            return step;
        }
        if(node.left == null) return find(step+1,node.right);
        if(node.right == null) return find(step+1,node.left);

        return Math.min(find(step+1,node.left),find(step+1,node.right));

    }

    return min;
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
//x1.right = x3;

y1.right = y2;
y2.right = y3;
y3.right = y4;
y4.right = y5;

console.log('res:'+minDepth(x1));
console.log('res:'+minDepth(y1));
