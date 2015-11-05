/**
 * Created by HimomoO on 11/3/15.
 */
/**
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

 If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

 The replacement must be in-place, do not allocate extra memory.

 Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 1,2,3 → 1,3,2
 3,2,1 → 1,2,3
 1,1,5 → 1,5,1

 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length <= 1) return nums;
    var length = nums.length - 1;
    var p1 = nums[length],p2 = nums[length - 1];

    while( length > 0){
        if(p1 >= p2) {
            nums[length] = p2;
            nums[length - 1] = p1;
            return nums;
        }
        p1 = p2;
        length--;
        p2 = nums[length - 1];
    }

    var start = 0, end = nums.length - 1;
    var tmp;
    while(start != end && start != end - 1){
        tmp = nums[start];
        nums[start] = nums[end];
        nums[end] = tmp;
        start++;
        end--;
    }

    return nums;
};

var l1 = [1,2,3];  //1,3,2
var l2 = [3,2,1];  // 1,2,3
var l3 = [1,1,5];  //1,5,1
var l4 = [1];
var l5 = [];
var l6 = [1,2,3,4,5,6,7,8,9,10]; //1,2,3,4,5,6,7,8,10,9
var l7 = [10,9,8,7,6,5,4,3,2,1]; //1,2,3,4,5,6,7,8,9,10

console.log(nextPermutation(l1));
console.log(nextPermutation(l2));
console.log(nextPermutation(l3));
console.log(nextPermutation(l4));
console.log(nextPermutation(l5));
console.log(nextPermutation(l6));
console.log(nextPermutation(l7));
