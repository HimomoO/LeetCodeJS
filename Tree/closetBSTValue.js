/**
 * Created by HimomoO on 11/15/15.
 */
/**
 * Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.
 * Note:
 Given target value is a floating point.
 You are guaranteed to have only one unique value in the BST that is closest to the target.

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Solution 1: 240ms. 向下遍历，若taget大于node则遍历右边 否则左边。 当abs小于当前diff值的的时候，更改diff值和closest点的值，最后返回closest
 * 缺点是树全部遍历一遍
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
//var closestValue = function(root, target) {
//    if(root === null) return null;
//
//    var diff = Math.abs(root.val - target);
//    var closest = root.val;
//
//    function find(node){
//        if(node === null) return;
//        if(target === node.val){
//            closest = target;
//            return;
//        }
//        if(Math.abs(node.val - target) < diff) {
//            closest = node.val;
//            diff = Math.abs(node.val - target);
//        }
//        if(target > node.val) find(node.right);
//        if(target < node.val) find(node.left);
//    }
//    find(root);
//
//    return closest;
//};

/**
 * More concise ..
 */
var closestValue = function(root, target) {
    if(root === null) return null;
    var res = root.val;
    while(root !== null){
        if(Math.abs(target - root.val) < Math.abs(target - res)) {
            res = root.val;
        }
        root = root.val > target ? root.left: root.right;
    }
    return res;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var x1 = new TreeNode(0);
var x2 = new TreeNode(1);
var x3 = new TreeNode(9);
var x4 = new TreeNode(3);
var x5 = new TreeNode(4);

var y1 = new TreeNode(0);
var y2 = new TreeNode(1);
var y3 = new TreeNode(2);
var y4 = new TreeNode(3);
var y5 = new TreeNode(4);

x1.right = x2;
x2.right = x3;

y1.right = y2;
y2.right = y3;
y3.right = y4;
y4.right = y5;

console.log('res:'+closestValue(x1,11.2));
console.log('res:'+closestValue(y1,2.2));
