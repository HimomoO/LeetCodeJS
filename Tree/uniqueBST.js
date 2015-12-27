/**
 *
 * Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

 For example,
 Given n = 3, there are a total of 5 unique BST's.

 1         3     3      2      1
 \       /     /      / \      \
 3     2     1      1   3      2
 /     /       \                 \
 2     1         2                 3

 */

/**
 * @param {number} n
 * @return {number}
 */

/**
 * Solution 1: 140ms. DP. 画图可知，每一个点的总数都是依次安排不同数量的点在左右的结果相加而成
 * 所以eg. f(3) = f(2)f(0) + f(1)f(1) + f(0)f(2)
 * 然后使用recursion时间会很长，所以使用for loop来存储上一次的结果 最后返回f(n)
 * @param n
 * @returns {number}
 */
var numTrees = function(n) {
 if(n  <= 1) return 1;
 var treeNum = [];
 treeNum[0] = 1;

 for(var i = 1; i <= n ; i++){
    treeNum[i] = 0;
    for(var j = 1; j <=i; j++){
     treeNum[i] += treeNum[j-1] * treeNum[i-j];
    }
 }

 return treeNum[n];
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

console.log(numTrees(3));
console.log(numTrees(5));