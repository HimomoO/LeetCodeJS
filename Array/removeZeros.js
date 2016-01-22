/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

 For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

 Note:
 You must do this in-place without making a copy of the array.
 Minimize the total number of operations.

 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(!nums && nums.length > 1){
        var count = 0;
        for(var i = 0; i < nums.length - 1; i++ ){
            if( nums[i] == 0){
                count++;
            }
            else{

            }
        }

    }
};

console.log(moveZeroes([]));
console.log(moveZeroes([0]));
console.log(moveZeroes([1]));
console.log(moveZeroes([0,1]));
console.log(moveZeroes([[0,1,0,3,12]]));
console.log(moveZeroes([[1,0,3,12,4,0,0,6,4,2,0,4,5,402,0,0,0,0,0]]));