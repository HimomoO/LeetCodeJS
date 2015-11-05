/**
 * Created by HimomoO on 11/4/15.
 */
/**
 * Given a sorted array of integers, find the starting and ending position of a given target value.

 Your algorithm's runtime complexity must be in the order of O(log n).

 If the target is not found in the array, return [-1, -1].

 For example,
 Given [5, 7, 7, 8, 8, 10] and target value 8,
 return [3, 4].

 */

/**
 * Solution 1: Traverse array from the back + from the start, return the first index of target value
 * If(start == end) should return [start,end]
 */
var searchRange = function(nums, target) {
    if(nums.length === 0 || target == null) return [-1,-1];
    if(nums.length === 1) return nums[0] == target?[0,0]:[-1,-1];
    var start = front();
    var end = back();

    function front(){
        for(var i = 0; i < nums.length; i++){
            if(nums[i] == target) return i;
        }
        return -1;
    }

    function back(){
        for(var i = nums.length - 1; i >= 0 ; i--){
            if(nums[i] == target) return i;
        }
        return -1;
    }


    return [start,end];
};

var nums1 = [5,7,7,8,8,10];  //3,4
var target1 = 8;
var nums2 = [5,8,7,7,8,8,10];  //1,5
var target2 = 8;
var nums3 = [];  //-1,-1
var target3 = 8;
var nums4 = [5,7,7,8,8,10]; // -1,-1
var target4 = null;
var nums5 = [5];
var target5 = 5;  //0,0
var nums6 = [8,8];
var target6 = 8;  //0,1
var nums7 = [1];
var target7 = 0;  //-1,-1
var nums8 = [5,7,7,8,10];
var target8 = 8;  //3,3

console.log(searchRange(nums1,target1));
console.log(searchRange(nums2,target2));
console.log(searchRange(nums3,target3));
console.log(searchRange(nums4,target4));
console.log(searchRange(nums5,target5));
console.log(searchRange(nums6,target6));
console.log(searchRange(nums7,target7));
console.log(searchRange(nums8,target8));


//Input:
//    [1]
//0
//Output:
//    [0,0]
//Expected:
//    [-1,-1]