/**
 * Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

 You should preserve the original relative order of the nodes in each of the two partitions.

 For example,
 Given 1->4->3->2->5->2 and x = 3,
 return 1->2->2->4->3->5

 */


function Print(node){
    while(node != null){
        console.log(node.val);
        node = node.next;
    }
}
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Solution 1: 148ms. 使用tmp链表。fakehead1和tmp储存大于等于x的node，fakehead2和tmp2储存小于的node。使用while循环每轮循环下一位以此遍历
 * 注意：
 * 1. 每一个tmp链表的最后记得清空next指向的尾巴，否则会把原链表的后续值带进去
 */
var partition = function(head, x) {
    if(head == null) return null;

    var fakehead1 = new ListNode(-1);
    var tmp1 = fakehead1;
    var fakehead2 = new ListNode(-2);
    var tmp2 = fakehead2;


    while(head != null){
        if(head.val >= x){
            tmp1.next = head;
            tmp1 = tmp1.next;
        }
        else{
            tmp2.next = head;
            tmp2 = tmp2.next;
        }
        head = head.next;
        tmp1.next = null;
        tmp2.next = null;
    }

    tmp2.next = fakehead1.next;
    return fakehead2.next;
};

var x1 = new ListNode(1);
var x2 = new ListNode(4);
var x3 = new ListNode(3);
var x4 = new ListNode(2);
var x5 = new ListNode(5);
var x6 = new ListNode(6);


x1.next = x2;
x2.next = x3;
x3.next = x4;
x4.next = x5;
x5.next = x6;

var res = partition(x1,4);
console.log("res");
Print(res);
