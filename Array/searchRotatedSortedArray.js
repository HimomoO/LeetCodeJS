/**
 * Created by HimomoO on 11/4/15.
 */
/**
 * Suppose a sorted array is rotated at some pivot unknown to you beforehand.

 (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

 You are given a target value to search. If found in the array return its index, otherwise return -1.

 You may assume no duplicate exists in the array.

 */

/**
 * Solution 1: 先判断， 如果target大于nums第一位，则从后序遍历，否则前序
 * 遍历使用while循环，当前（后）一个数字小于（大于）当前数字时候继续循环
 * 当等于target时候返回
 */
var search = function(nums, target) {
    if(nums.length === 0 || target == null) return -1;
    if(nums.length == 1 ) return target == nums[0]? 0: -1;
    var start = nums[0];

    if(target < start) return back();
    else return front();

    function back(){
        var l = nums.length - 1;
        var p1 = nums[l-1], p2 = nums[l];
        if(target == p2) return l;

        while(p1 <= p2){
            if(target == p1) return l-1;
            p2 = p1;
            l--;
            p1 = nums[l-1];
        }
        return -1;
    }

    function front(){
        var l = 0;
        var p1 = nums[1], p2 = nums[0];
        if(target == p2) return 0;

        while(p1 >= p2){
            if(target == p1) return l+1;
            p2 = p1;
            l++;
            p1 = nums[l+1];
        }
        return -1;
    }
};

var nums1 = [0,1,2,4,5,6,7]; //-1
var t1 = null;
var nums2 = [0,1,2,4,5,6,7];  //-1
var t2 = 8;
var nums3 = [0,1,2,4,5,6,7]; //3
var t3 = 4;
var nums4 = [4,5,6,7,0,1,2];  //0
var t4 = 4;
var nums5 = [4,5,6,7,0,1,2,2]; //7
var t5 = 2;
var nums6 = []; //-1
var t6 = 2;
var nums7 = [1,3]; //0
var t7 = 3;
var nums8 = [1]; //0
var t8 = 1;

console.log(search(nums1,t1));
console.log(search(nums2,t2));
console.log(search(nums3,t3));
console.log(search(nums4,t4));
console.log(search(nums5,t5));
console.log(search(nums6,t6));
console.log(search(nums7,t7));
console.log(search(nums8,t8));
