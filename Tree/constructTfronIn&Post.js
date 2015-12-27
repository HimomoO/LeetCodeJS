/**
 * Created by HimomoO on 11/18/15.
 */
/**
 * Given inorder and postorder traversal of a tree, construct the binary tree.

 Note:
 You may assume that duplicates do not exist in the tree.

 */

var buildTree = function(inorder,postorder) {
    if(postorder.length === 0 || inorder.length == 0) return null;

    var head = new TreeNode(postorder[postorder.length-1]);
    head.left = find(0,postorder.length - 1,0,inorder.length - 1);

    function find(ps,pe,is,ie){
        if(ps > pe || is > ie) return null;
        var root = new TreeNode(postorder[pe]);
        if(ps === pe) return root;

        var index = 0;
        for (var i = is; i <= ie; i++) {
            if (root.val == inorder[i]) {
                index = i;
                break;
            }
        }

        root.left = find(ps,ps+index-i-1,is,index-1);
        root.right = find(ps+index-ie-1,pe-1,index+1,ie);
        return root;
    }

    return head;
};

//private void buildTree(int[] inorder, int istart, int iend, int[] postorder, int pstart, int pend, TreeNode parent, boolean leftOrRight) {
//    if (iend<istart)
//        return;
//
//    // root == postorder[pend]
//    for (int i=istart; i<=iend; i++) {
//        if (postorder[pend]==inorder[i]) {
//            TreeNode root = new TreeNode(postorder[pend]);
//            if (leftOrRight)
//                parent.left = root;
//            else
//                parent.right = root;
//
//            buildTree(inorder, istart, i-1, postorder, pstart, pstart + (i-1-istart), root, true);
//            buildTree(inorder, i+1, iend, postorder, pend-1 - (iend-i-1), pend - 1, root, false);
//        }
//    }
//}
//}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var p1 = [4,5,2,6,7,3,1],i1 = [4,2,5,1,6,3,7];  //

var res = buildTree(i1,p1);
cal(res);


function cal(node){
    if(node !== null ){
        console.log(node.val);
        cal(node.left);
        cal(node.right);
    }
}