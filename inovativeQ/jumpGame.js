/**
 * Created by HimomoO on 11/17/15.
 */
/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.

 Each element in the array represents your maximum jump length at that position.

 Determine if you are able to reach the last index.

 For example:
 A = [2,3,1,1,4], return true.

 A = [3,2,1,0,4], return false.

 */

/**
 * Solution 1: 遍历寻找每一层能调到最后一位的，然后传入新长度递归。
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length <= 1) return true;
    var res = false;
    function find(end){
        console.log('next');
        if(res === true) return;
        if(end === 0) {
            //console.log('ture');
            res = true;
            return;
        }
        for(var i = 0; i <= end; i++){
            console.log(i);
            if(end - i <= nums[i]) {
                console.log('end-i:' +(end-i));
                find(i);
            }
            if(i === end && res === false) return res;
        }
    }

    find(nums.length-1);
    return res;

};

var A1 = [2,1,1,1,1,4] // true
var A2 = [3,2,1,0,4] // false

console.log(canJump(A1));
console.log(canJump(A2));