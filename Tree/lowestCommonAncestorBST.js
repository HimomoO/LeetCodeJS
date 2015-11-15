/**
 * Created by HimomoO on 11/12/15.
 */
/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

 According to the definition of LCA on Wikipedia:
 “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants
 (where we allow a node to be a descendant of itself).”

            _______6______
          /              \
      ___2__          ___8__
     /      \        /      \
    0      _4       7       9
   /  \
  3   5
 For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6.
 Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 */

/**
 * Solution 1: 230ms. 如果都大于root，则只遍历右子树。如果都小于，则只遍历左。否则返回。
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root == null || p == null || q == null) return null;

    if(Math.max(p.val, q.val) < root.val) return lowestCommonAncestor(root.left,p,q);
    if(Math.min(p.val, q.val) > root.val) return lowestCommonAncestor(root.right,p,q);
    return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//var n1 = new TreeNode(6);
//var n2 = new TreeNode(2);
//var n3 = new TreeNode(8);
//var n4 = new TreeNode(0);
//var n5 = new TreeNode(4);
//var n6 = new TreeNode(7);
//var n7 = new TreeNode(9);
//var n8 = new TreeNode(3);
//var n9 = new TreeNode(5);
//
//n1.left = n2;
//n1.right = n3;
//n2.left = n4;
//n2.right = n5;
//n4.left = n8;
//n4.right = n9;
//n3.left = n6;
//n3.right = n7;

var n1 = new TreeNode(5);
var n2 = new TreeNode(3);
var n3 = new TreeNode(6);
var n4 = new TreeNode(2);
var n5 = new TreeNode(4);
var n6 = new TreeNode(1);


n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n4.left = n6;
console.log(lowestCommonAncestor(n1,n5,n6));  //6
///[9,-1,-4,10,3,null,null,null,5]
//node with value 3
//node with value 5