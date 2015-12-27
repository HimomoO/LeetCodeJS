/**
 * Created by HimomoO on 11/15/15.
 */
/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.

 Note:
 You may assume that duplicates do not exist in the tree.

 */

/**
 * Solution 224ms. 想法同1一样，但是把node创建变成return，传参变成传递index。这样避免了传更多数组占内存
 * @param preorder
 * @param inorder
 * @returns {*}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0 || inorder.length == 0) return null;

    var head = new TreeNode(preorder[0]);
    head.left = find(0,preorder.length - 1,0,inorder.length - 1);

    function find(ps,pe,is,ie){
        if(ps > pe || is > ie) return null;
        var root = new TreeNode(preorder[ps]);
        if(ps === pe) return root;

        var index = 0;
        for (var i = is; i <= ie; i++) {
        if (root.val == inorder[i]) {
            index = i;
            break;
            }
        }

        root.left = find(ps+1,ps+index-is,is,index-1);
        root.right = find(ps+index-is+1,pe,index+1,ie);
        return root;
    }

    return head.left;
};
//public TreeNode buildTreeHelper(int[] preorder, int[] inorder, int ps, int pe, int is, int ie) {
//    if (ps > pe || is > ie) {
//        return null;
//    }
//    int index = 0;
//    for (int i=is; i<=ie; i++) {
//        if (root.val == inorder[i]) {
//            index = i;
//            break;
//        }
//    }
//    root.left = buildTreeHelper(preorder, inorder, ps+1, ps+index-is, is, index-1);
//    root.right = buildTreeHelper(preorder, inorder, ps+index-is+1, pe, index+1, ie);
//    return root;
//}
/**
 *
 * Solution: 见下。Memory LE
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//var buildTree = function(preorder, inorder) {
//    if(preorder.length === 0 || inorder.length == 0) return null;
//
//    var head = new TreeNode(preorder[0]);
//    function find(pre,ino,root){
//        if(pre.length === 0 || ino.length === 0) return;
//        console.log(pre);
//        console.log(ino);
//
//        var i = 0;
//        while(ino[i] != root.val) i++;
//
//        var left = i;
//        var right = ino.length - left - 1;
//
//        if(left != 0 ) root.left = new TreeNode(pre[1]);
//        if(right != 0 ) root.right = new TreeNode(pre[1+left]);
//        //console.log(root.left.val + ' '+root.right.val + ' ' + root.val);
//
//        find(pre.slice(1,left+1),ino.slice(0,left),root.left);
//        find(pre.slice(left+1,pre.length),ino.slice(left+1,ino.length),root.right);
//    }
//    find(preorder,inorder,head);
//
//    return head;
//};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var p1 = [7,10,4,3,1,2,8,11],i1 = [4,10,3,1,7,11,8,2];  //

var res = buildTree(p1,i1);
cal(res);


    function cal(node){
        if(node !== null ){
            console.log(node.val);
            cal(node.left);
            cal(node.right);
        }
    }

/**
 * There is an example.
            _______7______
           /              \
       __10__          ___2
      /      \        /
     4        3      8
               \    /
                1  11
 The preorder and inorder traversals for the binary tree above is:
 preorder = {7,10,4,3,1,2,8,11}
 inorder = {4,10,3,1,7,11,8,2}

 The first node in preorder alwasy the root of the tree. We can break the tree like:
 1st round:
 preorder:  {7}, {10,4,3,1}, {2,8,11}
 inorder:     {4,10,3,1}, {7}, {11, 8,2}

        _______7______
       /              \
   {4,10,3,1}       {11,8,2}
 Since we alreay find that {7} will be the root, and in "inorder" sert, all the data in the left of {7} will construct the left sub-tree. And the right part will construct a right sub-tree. We can the left and right part agin based on the preorder.
 2nd round
             left part                                                     right part
 preorder: {10}, {4}, {3,1}                                              {2}, {8,11}
 inorder:  {4}, {10}, {3,1}                                              {11,8}, {2}


            _______7______
           /              \
        __10__          ___2
       /      \        /
      4      {3,1}   {11,8}
 see that, {10} will be the root of left-sub-tree and {2} will be the root of right-sub-tree.

 Same way to split {3,1} and {11,8}, yo will get the complete tree now.

        _______7______
       /              \
   __10__          ___2
  /      \        /
 4       3      _8
          \    /
           1  11
 */