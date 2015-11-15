/**
 * Created by HimomoO on 11/15/15.
 */
/**
 * Given a binary tree, determine if it is height-balanced.

 For this problem,
 a height-balanced binary tree is defined as a binary tree in
 which the depth of the two subtrees of every node never differ by more than 1.
 */

/**
 * Solution 1: 188ms. from bottom to top， 最底下的节点depth是0，一层层向上传递，
 * 如果一个节点的left和right差值大于1则返回false，否则返回子节点的最大深度
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    var res = true;

    function find(node){
        if(node === null) return -1;

        var left,right;
        left = find(node.left) + 1;
        right = find(node.right) + 1;

        if(right - left > 1 || right - left < -1) res = false;
        return Math.max(left,right);
    }
    find(root);

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
x2.left = x4;

//y1.left = y2;
y1.right = y3;
//y2.right = y3;
y3.left = y4;
y3.right = y5; //[10,5,15,null,null,6,20]

console.log(isBalanced(null));
console.log(isBalanced(y1));