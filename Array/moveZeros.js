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
 * Solution 190ms. 遍历，如果遇到0则push到末尾，并且splice一位数。
 * ***需要注意一定要有一个round值来记录遍历数，否则遍历到最后都是0的时候会变成无限循环。
 */
var moveZeroes = function(nums) {
    if(!nums || nums.length <= 1) return;
    var round = 0;

    for(var i = 0; i < nums.length ; i++){
        if(round === nums.length) break;
        if(nums[i] === 0) {
            nums.splice(i,1);
            nums.push(0);
            i--;
        }

        round++;
    }

    console.log(nums);
    return;
};

var t1 = [0,1,0,2,13];
var t2 = [];
var t3 = [1];
var t4 = [0];
var t5 = [1,0];
var t6 = [0,2];

console.log(moveZeroes(t1));
console.log(moveZeroes(t2));
console.log(moveZeroes(t3));
console.log(moveZeroes(t4));
console.log(moveZeroes(t5));
console.log(moveZeroes(t6));