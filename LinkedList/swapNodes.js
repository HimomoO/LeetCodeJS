/**
 * Given a linked list, swap every two adjacent nodes and return its head.

 For example,
 Given 1->2->3->4, you should return the list as 2->1->4->3.

 Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var swapPairs = function(head) {
    var p1 = head;
    var p2 = head.next;
    //if(p1 === null) return null;
    //if(p1 !== null && p2 === null) return head;

    var fakehead = new ListNode(-1);
    var start = fakehead;

    while( p1 !== null && p2 !== null){

        start.next = p2;
        p2.next = p1;
        p1.next = null;
        start = p1;
        console.log("start: " + start.val + " p1: " + p1.val + " p2:" + p2.val);
        p1 = p2.next;
        p2 = p2.next.next;
        console.log("end: start: " + start.val + " p1: " + p1.val + " p2:" + p2.val);
    }

    return fakehead.next;
};

var x1 = new ListNode(1);
var x2 = new ListNode(2);
var x3 = new ListNode(3);
var x4 = new ListNode(4);

x1.next = x2;
x2.next = x3;
x3.next = x4;

var res = swapPairs(x1);
console.log("the final result is " );

while(res != null){
    console.log(res.val);
    res = res.next;
}