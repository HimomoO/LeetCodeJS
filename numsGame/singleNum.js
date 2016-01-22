/**
 * Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

 For example:

 Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

 Note:
 The order of the result is not important. So in the above example, [5, 3] is also correct.
 Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

 */

/**
 * Solution: 308ms. O(n)
 */
var singleNumber = function(nums) {
    if(nums.length === 0) return [];

    var list = [];
    var res = [];

    for(var x in nums)
        if(typeof list[nums[x]] === 'undefined') list[nums[x]] = 1;
        else list[nums[x]]++;

    for(var y in list)
        if(list[y] === 1) res.push(parseInt(y));

    return res;
};

var t1 = [1,2,1,3,2,5];
var t2 = [];
var t3 = [1];
var t4 = [1,2];
var t5 = [1,2,1,3,2,5,5,6,6,7,7,8,8,9];

console.log(singleNumber(t1));
console.log(singleNumber(t2));
console.log(singleNumber(t3));
console.log(singleNumber(t4));
console.log(singleNumber(t5));