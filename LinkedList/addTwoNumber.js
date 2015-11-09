
/**
 * You are given two linked lists representing two non-negative numbers. T
 * he digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.

 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8

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

function Print(node){
    while(node != null){
        console.log(node.val);
        node = node.next;
    }
}

var addTwoNumbers = function(l1, l2) {
    var tmp1, tmp2;

    function linkToArr(list,a){
        while( list !== null){
            a.push(list.val);
            list = list.next;
        }

        return a;
    }
    var tmpArr1 = linkToArr(l1,[]);
    var tmpArr2 = linkToArr(l2,[]);

    var flag = 0;
    var length = Math.min(tmpArr1.length,tmpArr2.length);
    var res = [];
    var tmp = 0;

    for( var i = 0; i <= length - 1; i++){

        tmp = tmpArr1[tmpArr1.length - i - 1] + tmpArr2[tmpArr2.length - i - 1];
        console.log(i + ' ' + tmp);
        if( flag == 1)
            tmp++;
        if(tmp >= 10){
            tmp = tmp%10;
            flag = 1;
        }
        else
            flag = 0;

        res.push(tmp);
    }

    console.log(res);

    function x(arr){
        for(var j = 0; arr.length - length - j > -1; j++){
            tmp = arr[arr.length - length - j];
            if(flag == 1)
                tmp++;

            if(tmp >= 10){
                tmp = tmp%10;
                flag = 1;
            }
            else
                flag = 0;

            res.push(tmp);
        }
    }

    if(tmpArr1.length > length)
       x(tmpArr1);
    else if(tmpArr2.length > length)
       x(tmpArr2);

    console.log(res);
    var fakehead = new ListNode(-1);
    var p = fakehead;

    for(var i = 0; i < res.length; i++){
        p.next = new ListNode(res[i]);
        p = p.next;
    }

    return fakehead.next;
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
Print(addTwoNumbers(null,y1));
