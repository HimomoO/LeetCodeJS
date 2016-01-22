/**
 * Given a list, rotate the list to the right by k places, where k is non-negative.

 For example:
 Given 1->2->3->4->5->NULL and k = 2,
 return 4->5->1->2->3->NULL.

 */

/**
 * Solution 1: 192ms. The basic idea is to link the tail of the list with the head, make it a cycle.
 *   Then count to the rotate point and cut it.
 *
 *   注意在Line 32和33的OO概念运用
 */
var rotateRight = function(head, k) {
    if(!head) return head;
     var fakehead = head;

    var len = 1;
    while(fakehead.next != null){
        fakehead = fakehead.next;
        len ++;
    }

    fakehead.next = head;

    for(var i = len - k % len; i > 1; i--){
        head = head.next;
    }

    fakehead = head.next;
    head.next = null;

    return fakehead;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var x1 = new ListNode(1);
var x2 = new ListNode(2);
var x3 = new ListNode(3);
var x4 = new ListNode(4);
var x5 = new ListNode(5);

x1.next = x2;
x2.next = x3;
x3.next = x4;
x4.next = x5;

var res = rotateRight(x1,2);
console.log("the final result is " );

while(res != null){
    console.log(res.val);
    res = res.next;
}