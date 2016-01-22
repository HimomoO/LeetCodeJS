/**
 * Created by HimomoO on 11/6/15.
 */
/**
 * Given an unsorted integer array, find the first missing positive integer.

 For example,
 Given [1,2,0] return 3,
 and [3,4,-1,1] return 2.

 Your algorithm should run in O(n) time and uses constant space.

 */

/**
 * Solution 1: 156ms. 用数组undefined。从1网上遍历若n不存在则返回n
 * 注意：missing positive所以0不算？
 */
var firstMissingPositive = function(nums) {
    if(nums.length === 0) return 1;

    var sample = [];
    sample[0] = false;

    for(x in nums){
        if(nums[x] >= 0){
            if(typeof sample[nums[x]] == 'undefined') sample[nums[x]] = true;
            sample[nums[x]] = true;
        }
    }

    if(sample.length == 1 && sample[0] == false) return 0;

    var n = 1;
    while(1){
        if(typeof sample[n] == 'undefined') return n;
        n++;
    }

    return 0;
};

var t1 = [1,2,0]; //3
var t2 = [3,4,-1,1]; //2
var t3 = []; //1
var t4 = [0]; //1
var t5 = [2]; //1
var t6 = [-2,-3,-4,-5]; //0

console.log(firstMissingPositive(t1));
console.log(firstMissingPositive(t2));
console.log(firstMissingPositive(t3));
console.log(firstMissingPositive(t4));
console.log(firstMissingPositive(t5));
console.log(firstMissingPositive(t6));
