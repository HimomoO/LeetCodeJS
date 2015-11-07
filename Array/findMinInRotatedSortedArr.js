/**
 * Created by HimomoO on 11/6/15.
 */
/**
 * Suppose a sorted array is rotated at some pivot unknown to you beforehand.

 (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

 Find the minimum element.

 You may assume no duplicate exists in the array.

 */

/**
 * Solution: 136ms. 对比头尾若头小于尾直接返回头，否则进入while循环从后向前遍历
 */
var findMin = function(nums) {
    if(nums.length === 0) return null;
    if(nums.length === 1) return nums[0];

    if(nums[0] < nums[nums.length - 1]) return nums[0];
    else{
        var length = nums.length - 1;
        var p2 = nums[length], p1 = nums[length - 1];
        while(1){
            if(p1 > p2) return p2;
            length--;
            p2 = nums[length];
            p1 = nums[length - 1];
        }
    }
};

var t1 = [4,5,6,0,1,2]; //0
var t2 = []; //null
var t3 = [5]; //5
var t4 = [4,5,6,7,8]; //4
var t5 = [4,5,5,5,6,7,8,0,0,1]; //0

console.log(findMin(t1));
console.log(findMin(t2));
console.log(findMin(t3));
console.log(findMin(t4));
console.log(findMin(t5));