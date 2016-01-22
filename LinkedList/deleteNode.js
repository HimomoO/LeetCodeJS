/**
 * Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

 Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3,
 the linked list should become 1 -> 2 -> 4 after calling your function.

 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * solution: 直接赋值......node给的是第三个的node
 */
var deleteNode = function(node) {
    node.val=node.next.val;
    node.next=node.next.next;
};
var x1 = new ListNode(1);
var x2 = new ListNode(2);
var x3 = new ListNode(3);
var x4 = new ListNode(4);
var x5 = new ListNode(5);

x1.next = x2;
x2.next = x3;
x3.next = x4;
x4.next = x5;

var res = deleteNode(3);
console.log("the final result is " );

while(res != null){
    console.log(res.val);
    res = res.next;
}