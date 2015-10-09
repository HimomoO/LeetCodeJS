/**
 *  Given an array of integers, find two numbers such that they add up to a specific target number.

 The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

 You may assume that each input would have exactly one solution.

 Input: numbers={2, 7, 11, 15}, target=9
 Output: index1=1, index2=2

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * Solution 1: TLE: 先将数组排序，在从两端往中间进行相加，大于则end--，小于则start++
 * @param nums
 * @param target
 * @returns {*}
 */

//var twoSum = function(nums, target) {
//    if(nums.length === 0 ) return null;
//    if(nums.length == 1) return null;
//
//    var tmp =[];
//    function sortArr(m,n){
//        return m-n;
//    }
//
//    for(var j = 0; j < nums.length ; j++){
//        tmp.push(nums[j]);
//    }
//
//    tmp.sort(sortArr);
//    console.log(tmp.toString());
//    console.log(nums.toString());
//    var start = 0;
//    var end = tmp.length - 1;
//    var sum = tmp[start] + tmp[end];
//    var res = [];
//
//    //console.log(sum);
//    while(sum != target){
//        if(sum > target)
//            end--;
//        else
//           start++;
//
//        sum = tmp[start] + tmp[end];
//
//        if(end == start)
//            break;
//
//        console.log("start " + start + " end " + end);
//    }
//
//    console.log("break start " + start + " end " + end);
//    var tmp1 = tmp[start];
//    var tmp2 = tmp[end];
//
//    console.log(tmp1 + " + " + tmp2);
//
//    for(var i = 0; i < nums.length; i++){
//        console.log(i);
//        if(nums[i] == tmp1){
//            res.push(i+1);
//            tmp1 = null;
//            console.log("tmp1 push " + i + ":" + nums[i]);
//        }
//
//        if(nums[i] == tmp2) {
//            res.push(i+1);
//            tmp2 = null;
//            console.log("tmp2 push " + i);
//        }
//    }
//
//    return res;
//};


/**
 * Solution 2: 非常棒的一个解法，使用了类似map的方法
 *
 * @param nums
 * @param target
 * @returns {Array}
 */
var twoSum = function(nums, target) {
    var ret = [];
    var exist = {};
    for(var i = 0; i < nums.length; i++){
        if(typeof(exist[target - nums[i]]) !== 'undefined'){
            ret.push(exist[target - nums[i]]);
            ret.push(i + 1);
        }

        exist[nums[i]] = i + 1;
    }

    return ret
};


var list = [3,2,4];

console.log("the final result is " + twoSum(list,6).toString());