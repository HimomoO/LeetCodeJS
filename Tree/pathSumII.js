/**
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

 For example:
 Given the below binary tree and sum = 22,
         5
        / \
       4   8
      /   / \
    11  13  4
    /  \    / \
   7    2  5   1
 return
 [
 [5,4,11,2],
 [5,8,4,5]
 ]

 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Solution 1: recursion. 250ms. 注意：sum可能是负数。。题目并没有明确说明是正整数。
 * 另，当在递归中使用[]时，不能用path.push(node.val)，报错（dont know why)，但可以用path.concat(node.val)
 */
var pathSum = function(root, sum) {
    if(!root) return [];
    if(root.length == 1) return [];

    var res = [];
    search(root,[],sum);

    function search(node,path,target){
        if(node.right == null && node.left == null){
            if(target - node.val == 0 ) res.push(path.concat(node.val));
        }

            if(node.left != null) search(node.left,path.concat(node.val),target - node.val);
            if(node.right != null) search(node.right,path.concat(node.val),target - node.val);
    }

    return res;
};

var x1 = new TreeNode(1);
var x2 = new TreeNode(2);
var x3 = new TreeNode(8);
var x4 = new TreeNode(11);
var x5 = new TreeNode(13);
var x6 = new TreeNode(4);
var x7 = new TreeNode(7);
var x8 = new TreeNode(2);
var x9 = new TreeNode(1);
var x10 = new TreeNode(5);

x1.left = x2;
//x1.right = x3;
//x2.left = x4;
//x3.left = x5;
//x3.right = x6;
//x4.left = x7;
//x4.right = x8;
//x6.right = x9;
//x6.left = x10;

var y1 = new TreeNode(-2);
var y2 = new TreeNode(-3);

y1.right = y2;

console.log(pathSum(x1,1));
console.log(pathSum(y1,-5));

var z1 = new TreeNode(1);
var z2 = new TreeNode(-2);
var z3 = new TreeNode(-3);
var z4 = new TreeNode(1);
var z5 = new TreeNode(3);
var z6 = new TreeNode(-1);

z1.left = z2;
z1.right = z3;
z2.left = z4;
z2.right = z5;
z4.left = z6;

console.log(pathSum(z1,-1));