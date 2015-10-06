/**
 * You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
     this.val = val;
     this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    var tmp1, tmp2;
    var tmpArr1 = [], tmpArr2 = [];

    function linkToArr(list,arr){
        while( list !== null){
            arr.push(list.val);
            list = list.next;
        }
    }
    linkToArr(l1,tmpArr1);
    linkToArr(l2,tmpArr2);

    var flag = 0;

    for( var j = )


};

var x1 = new ListNode(2);
var x2 = new ListNode(4);
var x3 = new ListNode(3);

var y1 = new ListNode(5);
var y2 = new ListNode(6);
var y3 = new ListNode(4);

x1.next = x2;
x2.next = x3;
y1.next = y2;
y2.next = y3;
console.log(addTwoNumbers(x1,x2).toString());
