/**
 * Created by HimomoO on 11/4/15.
 */
/**
 * Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

 The same repeated number may be chosen from C unlimited number of times.

 Note:
 All numbers (including target) will be positive integers.
 Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
 The solution set must not contain duplicate combinations.

 For example, given candidate set 2,3,6,7 and target 7,
 A solution set is:
 [7]
 [2, 2, 3]

 */

/**
 * Solution 1: 400ms. Recursion. 先用二维数组储存candidates值，然后遍历candidates
 * 注意：
 * 1. 因题目要求升序，所以要设置阀值（level）来遍历sample，若当前x值小于目前已经遍历到的level值，则不会深入
 * 2. 需要注意数字变化成二维数组的index后很容易不小心变成string，所以最好使用parseInt进行转换保护下。否则结果容易变成[['1']]
 *
 * 如果不使用二维数组 则需要使用sort先排升序才能保证
 */
var combinationSum = function(candidates, target) {
    if(candidates.length == 0 || target == null) return [];

    var res = [];
    candidates.sort(function(a,b){
        return a-b;
    });
    console.log(candidates);

    f(target,[],0);

    function f(t,result,level){
        if(t == 0) res.push(result);
        if(t < 0 ) return;
        else{
            for( x in candidates){
                if( x >= level) {
                    f(t-candidates[x], result.concat([candidates[x]]), parseInt(x));
                }
            }
        }
    }
    return res;
};
//二维数组：
//var combinationSum = function(candidates, target) {
//    if(candidates.length == 0 || target == null) return [];
//
//    var sample = [];
//    var res = [];
//    for(i in candidates){
//        if(typeof sample[candidates[i]] == 'undefined') sample[candidates[i]] = 1;
//    }
//
//    f(target,[],0);
//
//    function f(t,result,level){
//        if(t == 0) res.push(result);
//        if(t < 0 ) return;
//        else{
//            for( x in sample){
//                if( x >= level) {
//                    f(parseInt(t-x), result.concat([parseInt(x)]), parseInt(x));
//                }
//            }
//        }
//    }
//    return res;
//};

var nums1 = [3,12,9,11,6,7,8,5,4]; var target1 = 15; //[[2,2,3],[2,5],[7]]
var nums2 = []; var target2 = 7;        //[]
var nums3 = [2]; var target3 = 2;       //[[2]]
var nums4 = [2]; var target4 = 4;       //[[2,2]]
var nums5 = [2,2]; var target5 = 4;     //[[2,2]]
var nums6 = [2,2]; var target6 = 5;     //[]

console.log(combinationSum(nums1,target1));
//console.log(combinationSum(nums2,target2));
//console.log(combinationSum(nums3,target3));
//console.log(combinationSum(nums4,target4));
//console.log(combinationSum(nums5,target5));
//console.log(combinationSum(nums6,target6));