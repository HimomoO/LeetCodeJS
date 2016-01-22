/**
 * Reverse a singly linked list.

 click to show more hints.

 Hint:
 A linked list can be reversed either iteratively or recursively. Could you implement both?

 */

  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    return find(null,head);

    function find(node,remain){

    }
};

/**
 * public ListNode reverseList(ListNode head) {
    return helper(null, head);
}

 ListNode helper(ListNode reversed, ListNode remaining) {
    if(remaining==null) return reversed;
    ListNode tmp = remaining.next;
    remaining.next = reversed;

    return helper(remaining, tmp);
}

 * @type {ListNode}
 */

var x1 = new ListNode(1);
var x2 = new ListNode(2);
var x3 = new ListNode(3);
var x4 = new ListNode(4);
var x5 = new ListNode(5);

x1.next = x2;
x2.next = x3;
x3.next = x4;
x4.next = x5;

var res = reverseList(x1);
console.log("the final result is " );

while(res != null){
    console.log(res.val);
    res = res.next;
}