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

var deleteDuplicates = function(head) {
    if(head === null) return null;

    var fakehead = new ListNode(-1);
    fakehead.next = head;
    var curr = head;
    var next = head.next;

    while( next !== null){
        //console.log("curr" + curr.val);
        //console.log("next" + next.val);
        if(next.val > curr.val ){
            curr.next = next;
            next = next.next;
            curr = curr.next;
            //console.log("next > curr so curr is " + curr.val + " and next is " + next.val + " and curr is linked to " + curr.next);
        }
        else{
            //console.log("next == curr so curr is " + curr.val + " and next is " + next.val);
            if(next.next == null){
                curr.next = null;
                break;
            }
                next = next.next;
            //console.log("next == curr so curr is " + curr.val + " and next is " + next.val);
        }

    }

    return fakehead.next;
};

var x1 = new ListNode(1);
var x2 = new ListNode(1);
var x3 = new ListNode(2);
var x4 = new ListNode(3);
var x5 = new ListNode(3);
var x6 = new ListNode(3);

x1.next = x2;
x2.next = x3;
//x3.next = x4;
//x4.next = x5;
//x5.next = x6;

//
//while(x1 != null){
//    console.log(x1.val);
//    x1 = x1.next;
//}

var res = deleteDuplicates(x1);



while(res != null){
    console.log(res.val);
    res = res.next;
}