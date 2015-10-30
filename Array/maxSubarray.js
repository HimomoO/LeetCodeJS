/**
 *Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * For example, given the array [−2,1,−3,4,−1,2,1,−5,4]
 * the contiguous subarray [4,−1,2,1] has the largest sum = 6.
 *
 * More practice:
 * If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

 For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
 the contiguous subarray [4,−1,2,1] has the largest sum = 6.

 */

/**
 * Solution 2: 每一个元素都有两种选择：成为上一个子集的最后一位，或 成为下一个子集的第一位
 * 这取决于一个条件：              包括n之前的元素综合比n单独要大  包括n之前的元素总和比n单独要小（所以最大子列没有必要加上n之前的元素
 *
 * 属于动态规划解法Dynamic Programming Solution：
 *     (1) 最优化原理：如果问题的最优解所包含的子问题的解也是最优的，就称该问题具有最优子结构，即满足最优化原理。
 *     (2) 无后效性：即某阶段状态一旦确定，就不受这个状态以后决策的影响。也就是说，某状态以后的过程不会影响以前的状态，只与当前状态有关。
 *     (3）有重叠子问题：即子问题之间是不独立的，一个子问题在下一阶段决策中可能被多次使用到。（该性质并不是动态规划适用的必要条件，但是如果没有这条性质，动态规划算法同其他算法相比就不具备优势）
 *
 * 156 ms
 */
var maxSubArray = function(nums) {
    if(nums.length == 1) return nums[0];
    var result = nums[0];
    var tmp = nums[0];

    for(var i = 1; i < nums.length ; i++){
        tmp += nums[i];
        if(nums[i] > tmp)
            tmp = nums[i];
        if(tmp > result)
            result = tmp;
    }

    return result;
};

/**
 * Solution 1 : Time expired: 使用了迭代recursion，将大于0的数字挑出来（最大子列必定是正数开头结尾）
 */
//var maxSubArray = function(nums) {
//    if(nums.length == 1) return nums[0];
//    var result = 0;
//    var tmpArr = [];
//
//    for( var i = 0; i < nums.length; i++){
//        if(nums[i] >= 0){
//            tmpArr.push(i);
//        }
//    }
//    //console.log("tmpArr is " + tmpArr.toString());
//
//    function add(i1,i2){
//        console.log("compare index " + i1 + " with " + i2);
//        var tmp = 0;
//        for(var j = i1; j <= i2 ; j++){
//            tmp += nums[j];
//        }
//        if(tmp > result)
//            result = tmp;
//    }
//
//    function helper(list){
//        console.log("tmpArr is " + list.toString());
//            for( var k = 0; k < list.length ; k++){
//                add(list[0],list[k]);
//            }
//
//            list.shift();
//            if(list.length != 0)
//               helper(list);
//    }
//
//    helper(tmpArr);
//
//    return result;
//};

var nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log("the largest num is " + maxSubArray(nums));