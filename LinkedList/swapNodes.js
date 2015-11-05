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
 * Solution 1: 136ms. 向后遍历 两两交换
 * 注意： line 41时如果p1.next = null一定要break，否则无法读出next.next,会报错
 */

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var swapPairs = function(head) {
    if(head == null || head.next == null) return head;

    var fakehead = new ListNode(-1);
    var p = fakehead;
    var p1 = head, p2 = head.next;

    while(p1 != null && p2 != null){
        p1.next = p2.next;
        p2.next = p1;
        p.next = p2;

        p = p1;
        p1 = p1.next;
        if(p1 == null) break;
        p2 = p1.next;

    }

    if(p1 != null) p.next = p1;
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