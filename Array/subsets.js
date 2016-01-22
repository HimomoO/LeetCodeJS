/**
 * Given a set of distinct integers, nums, return all possible subsets.

 Note:
 Elements in a subset must be in non-descending order.
 The solution set must not contain duplicate subsets.
 For example,
 If nums = [1,2,3], a solution is:

 [
 [3],
 [1],
 [2],
 [1,2,3],
 [1,3],
 [2,3],
 [1,2],
 []
 ]

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(nums.length == 0) return null;

    var res = [];
    for(var i = 0; i <= nums.length i++){

    }
};

/**
 * Solution: 172ms. Backtracking solution...
 */
//var subsets = function(nums) {
//    var solution = [];
//    var result = [];
//    var used = [];  // nums, each element can only be used once
//
//    var backTracking = function(k, n) {
//        if(k==n){
//            return result.push(solution.slice(0));
//        }else{
//            for(var i=0; i<nums.length; ++i){
//                if(used[i]) { continue; }   // when true, express the element(used[i]) has been used
//                if(k>0 && solution[k-1]>nums[i]) { continue; }  // elements can only small to large order
//                used[i] = true;
//                solution[k] = nums[i];
//                arguments.callee(k+1, n);
//                used[i] = false;
//            }
//        }
//    }
//
//    for(var i=0; i<=nums.length; ++i){
//        backTracking(0, i);
//        // eg. subsets([1, 2, 3]);
//        // backTracking(0, 0); return [];
//        // backTracking(0, 1); return [1], [2], [3];
//        // backTracking(0, 2); return [1, 2], [1, 3], [2, 3];
//        // backTracking(0, 3); return [1, 2, 3];
//    }
//
//    return result;
//};

var test = [1,2,3];

console.log(subsets(test));

//
//var tmp = test.slice(1,test.length);
//console.log(tmp);


