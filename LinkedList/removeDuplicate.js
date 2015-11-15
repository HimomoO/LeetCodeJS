/**
 * Given a sorted linked list, delete all duplicates such that each element appear only once.

 For example,
 Given 1->1->2, return 1->2.
 Given 1->1->2->3->3, return 1->2->3.
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
/**
 * Solution: 164ms.向后遍历。若大于则存储
 * @param head
 * @returns {null}
 */
var deleteDuplicates = function(head) {
    if(head === null) return null;

    var fakehead = new ListNode(-1);
    fakehead.next = head;
    var curr = head;
    var next = head.next;

    while( next !== null){
        if(next.val > curr.val ){
            curr.next = next;
            next = next.next;
            curr = curr.next;
        }
        else{
            if(next.next === null){
                curr.next = null;
                break;
            }
            next = next.next;
        }

    }

    return fakehead.next;
};

var x1 = new ListNode(1);
var x2 = new ListNode(1);
var x3 = new ListNode(2);
var x4 = new ListNode(2);
var x5 = new ListNode(2);
var x6 = new ListNode(2);

x1.next = x2;
x2.next = x3;
x3.next = x4;
x4.next = x5;
x5.next = x6;

var res = deleteDuplicates(x1);

while(res != null){
    console.log(res.val);
    res = res.next;
}