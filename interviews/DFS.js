/**
 * Created by HimomoO on 16/1/12.
 */

function Node(val) {
    this.val = val;
    this.adjacentTo = [];
}

var DFS = function(root) {

    var res = [];
    var visited = [];
    var stack = [];
    res.push(root.val)
    visited.push(root.val);
    stack.push(root);
    search(root.adjacentTo);

    function search(nodes){
        if(stack.length == 0) return;
        var flag = 1;
        for(var i = 0; i < nodes.length; i++){
            if(visited.indexOf(nodes[i].val) == -1){

                flag = 0;
                visited.push(nodes[i].val);
                res.push(nodes[i].val);
                stack.push(nodes[i]);
                console.log('search ' + nodes[i].val);
                search(nodes[i].adjacentTo);
            }
        }

        if(flag){
            stack.pop();
            if(stack.length != 0 ) search(stack[stack.length - 1].adjacentTo);
        }
    }

    return res;
}
var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');
var F = new Node('F');
var G = new Node('G');
var H = new Node('H');

A.adjacentTo.push(B);
A.adjacentTo.push(D);
A.adjacentTo.push(G);

B.adjacentTo.push(A);
B.adjacentTo.push(E);
B.adjacentTo.push(F);

C.adjacentTo.push(F);
C.adjacentTo.push(H);

D.adjacentTo.push(A);
D.adjacentTo.push(F);

E.adjacentTo.push(B);
E.adjacentTo.push(G);

F.adjacentTo.push(B);
F.adjacentTo.push(D);
F.adjacentTo.push(C);

G.adjacentTo.push(A);
G.adjacentTo.push(E);

H.adjacentTo.push(C);

console.log(DFS(A));
