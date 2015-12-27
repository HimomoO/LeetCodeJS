/**
 * Created by HimomoO on 11/15/15.
 */
/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

 For example, this binary tree is symmetric:

       1
      / \
     2   2
    / \ / \
   3  4 4  3
 But the following is not:
      1
     / \
    2   2
     \   \
     3    3
 */

/**
 * Solution 1: 递归，遍历，不断对比左子树和右子树。
 * @param {TreeNode} root
 * @return {boolean}
 * 其他可能解法：
 * 1、我看到这道题的想法是这样的：一棵有左右孩子，而且非空的二叉树，对它的左孩子进行层次遍历，并把结果存起来；对它的右孩子进行逆序的层次遍历（每一层从右到左遍历），并把结果存起来。最后把左右孩子进行对比。显然这个方法是比较笨的 -..-

 2、把所有左子树和“镜像”对应的右子树进行对比，不断的递归。如果每一次对比返回的结果都是true，则是镜像二叉树。

 3、中序遍历，思路和1、差不多

 4、分别遍历根节点的左右子树，获得一个字符串。然后对比。
 http://m.blog.csdn.net/blog/u012403246/41213957
 */
var isSymmetric = function(root) {
    function compare(a,b) {
        if (a === null && b === null) return true;
        if (a === null || b === null) return false;
        return a.val == b.val && compare(a.left, b.right) && compare(a.right, b.left);
    }

    return root? compare(root.left,root.right):true;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var x1 = new TreeNode(0);
var x2 = new TreeNode(1);
var x3 = new TreeNode(1);
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

console.log('res:'+isSymmetric(x1));
console.log('res:'+isSymmetric(y1));