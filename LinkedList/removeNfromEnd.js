/**
 * Given a linked list, remove the nth node from the end of list and return its head.

 For example,

 Given linked list: 1->2->3->4->5, and n = 2.

 After removing the second node from the end, the linked list becomes 1->2->3->5.
 Note:
 Given n will always be valid.
 Try to do this in one pass.

 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
     this.val = val;
     this.next = null;
}

/**
 * Solution 1: 使用两个for循环，第一个循环找出linkedlist的长度， 算出target的位数。 第二个循环循环linkedlist，当到target前一位时，next = next next，跳过target
 * 注意
 * 1. 各种边界输入和边界条件： n = 0 (return head), n = length (return head.next)
 * 2. 到target后，跳过target赋值记得将index+1，否则length计数达到最后一位会null pointer
 */
var removeNthFromEnd = function(head, n) {
    if(!head) return null;
    if(n == 0) return head;

    var length = 0;
    var tmp = head;

    while( tmp != null ){
        tmp = tmp.next;
        length++;
    }

    if(length == n) {
        head = head.next;
        return head;
    }
    var target = length - n + 1;

    var tmp2 = head;

    for(var i = 1; i <= length; i++){
        if( i == target -1 ){
            tmp2.next = tmp2.next.next;
            tmp2 = tmp2.next;
            i++;
        }
        else{
            tmp2 = tmp2.next;
        }
    }

    return head;

};

var x1 = new ListNode(1);
var x2 = new ListNode(2);
var x3 = new ListNode(3);
var x4 = new ListNode(4);
var x5 = new ListNode(5);

x1.next = x2;
//x2.next = x3;
//x3.next = x4;
//x4.next = x5;



var res = removeNthFromEnd(x1,0);
console.log("the Final list:");
while( res != null ){
    console.log(res.val);
    res = res.next;
}