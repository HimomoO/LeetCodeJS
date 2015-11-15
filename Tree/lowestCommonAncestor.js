/**
 * Created by HimomoO on 11/10/15.
 */
/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

 According to the definition of LCA on Wikipedia:
 “The lowest common ancestor is defined between two nodes v and w as the lowest node in T
 that has both v and w as descendants (where we allow a node to be a descendant of itself).”

            _______6______
           /              \
       ___2__          ___8__
      /      \        /      \
     0       4       7       9
   /  \
  3   5
 For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6.

 Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

 */

//function TreeNode(val) {
//    this.val = val;
//    this.left = this.right = null;
//}
/**
 * Solution 2: 190ms. 从下往上看，4这个节点往上一层返回null，因为这个节点本身，它的左子树和右子树都不包含2和8。

 同理7，9，23返回null，

 2这个节点左右子树不包含2和8，但它自身是2，返回2，

 同理以8为根节点的树返回8，

 以6为根节点的树发现左右都不为null，说明找到了。

 以上是一种情况，还有一种情况就是一旦发现目前的节点等于p或者q，就可以直接返回，因为默认输入是正确的。
 * @param root
 * @param p
 * @param q
 * @returns {*}
 */
//var lowestCommonAncestor = function(root, p, q) {
//
//    if (root === null || root === p || root === q) {
//        return root;
//    }
//    var left = lowestCommonAncestor(root.left, p, q);
//    var right = lowestCommonAncestor(root.right, p, q);
//    return left !== null && right !== null ? root : (left !== null ? left : right);
//};
/**
 * SOLUTION 1: Memory Limit Exceeded. 遍历树寻找路径，再存储。 两两往后对比
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//var lowestCommonAncestor = function(root, p, q) {
//    if(root == null) return null;
//    if(root.left == null && root.right == null) return null;
//
//    var path1 = [], path2 = [];
//
//    find(root,[]);
//    function find(node,path){
//        if(node == null) return;
//
//        if(node.val == p.val) path1 = path.concat(node.val);
//        if(node.val == q.val) path2 = path.concat(node.val);
//        if(path1.length != 0 && path2.length != 0) return;
//
//        find(node.left,path.concat(node.val));
//        find(node.right,path.concat(node.val));
//    }
//
//    var i = 0;
//    while(i < path1.length && i < path2.length){
//        if(path1[i] != path2[i]) return path1[i-1];
//        i++;
//    }
//
//    return null;
//};

/**
 * Solution: 有带parent的结构。找到相应的parent，return.然后把两边parent放到一个深度(不是一个深度始终无法相遇)，然后while对比
 * @param root
 * @param p
 * @param q
 * @returns {*}
 */
var lowestCommonAncestor = function(root, p, q) {

    var parent1, parent2;
    var depth1,depth2;
    find(root,0);
    function find(node,d){
        if(node === null) return;
        if(parent1 != null && parent2 != null) return;
        if(node === p) {
            parent1 = node.parent;
            depth1 = d-1;
        }
        if(node === q) {
            parent2 = node.parent;
            depth2 = d-1;
        }
        find(node.left,d+1);
        find(node.right,d+1);
    }

    if(parent1 === parent2) return parent1;
    var res = depth1 > depth2? compareParent(parent1,parent2,depth1,depth2):compareParent(parent2,parent1,depth2,depth1);

    function compareParent(lower,higher,lowerNum,higherNum){
        while(lowerNum != higherNum){
            lower = lower.parent;
            lowerNum--;
        }
        while(higher !== lower){
            lower = lower.parent;
            higher = higher.parent;
        }
        return higher;
    }

    return res;
};

function TreeNode(val) {
    this.val = val;
    this.parent = null;
    this.left = this.right = null;
}

var n1 = new TreeNode(6);
var n2 = new TreeNode(2);
var n3 = new TreeNode(8);
var n4 = new TreeNode(0);
var n5 = new TreeNode(4);
var n6 = new TreeNode(7);
var n7 = new TreeNode(9);
var n8 = new TreeNode(3);
var n9 = new TreeNode(5);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n4.left = n8;
n4.right = n9;
n3.left = n6;
n3.right = n7;


n9.parent = n4;
n8.parent = n4;
n4.parent = n2;
n5.parent = n2;
n2.parent = n1;
n6.parent = n3;
n7.parent = n3;
n3.parent = n1;
console.log(lowestCommonAncestor(n1,n6,n7));  //6