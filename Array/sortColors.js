/**
 * Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

 Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

 Note:
 You are not suppose to use the library's sort function for this problem.

 click to show follow up.

 Follow up:
 A rather straight forward solution is a two-pass algorithm using counting sort.
 First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

 Could you come up with an one-pass algorithm using only constant space?
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


/**
 * Solution 1: Traverse the array, if the color is 0, move to the start, if the color is 2, move to the end.
 */
var sortColors = function(nums) {
    if(nums.length !== 0) {
        var l = nums.length;

        for (var i = 0; i <= nums.length - 1; i++ ) {
            console.log(i + " and nums[i] is " + nums[i]);
            if(l === 0) break;

            if(nums[i] === 0){
                nums.unshift(nums[i]);
                nums.splice(i+1,1);
            }
            else if(nums[i] == 2){
                nums.push(nums[i]);
                nums.splice(i,1);
                i--;
            }

            l--;
        }

        console.log("Final: the sorted array is " + nums.toString());
    }
};

var a = [1,0,2,1,2,0,2];
sortColors(a);