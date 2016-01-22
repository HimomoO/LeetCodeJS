/**
 * Follow up for "Remove Duplicates":
 What if duplicates are allowed at most twice?

 For example,
 Given sorted array nums = [1,1,1,2,2,3],

 Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3.
 It doesn't matter what you leave beyond the new length.

 */

/**
 * Solution 1 : 212 ms. 使用一个visited array记录出现过的次数，若大于2则splice掉，最后返回nums.length
 */
var removeDuplicates = function(nums) {
 if(!nums || nums.length == 0) return 0;

 var visitied = [];
 for(var i = 0; i < nums.length ; i++){

      if(typeof visitied[nums[i]] === 'undefined') visitied[nums[i]] = 1;
      else if(visitied[nums[i]] < 2) visitied[nums[i]]++;
      else{
        nums.splice(i,1);
       i--;
      }

 }
 return nums.length;
};

var t1 = [1,1,1,2,2,3];
var t2 = [];
var t3 = [1];
var t4 = [1,2,3];
var t5 = [1,1,1,1,1,1,1,1,1,1,1];
console.log(removeDuplicates(t1));
console.log(removeDuplicates(t2));
console.log(removeDuplicates(t3));
console.log(removeDuplicates(t4));
console.log(removeDuplicates(t5));
