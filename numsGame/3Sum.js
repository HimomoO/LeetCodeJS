/**
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

 Note:
 Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
 The solution set must not contain duplicate triplets.
 For example, given array S = {-1 0 1 2 -1 -4},

 A solution set is:
 (-1, 0, 1)
 (-1, -1, 2)

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * Solution 1: 先排序，然后定下第一位以后再对后面的数组项从头尾往中间遍历。 LTE
 * 需要注意的情况：
 * 1. []和任何小于3的数组
 * 2. [0,0,0]重复数组
 * 3. 第一位定到Nums.length - 2即可：剩下小于三位数不可能构成答案
 * 3. 使用push构造二维数组：res.push(new Array(a,b,c));
 */
var threeSum = function(nums) {
    if(nums.length < 3) return [];
    var res = [];

    function sortArr(m,n){
        return m-n;
    }

    nums.sort(sortArr);

    //console.log(nums);
    var start, end;
    var tmp = 0 - nums[0];


    console.log(nums);

    for(var i = 0; i < nums.length - 2; ){
        start = i+1;
        end = nums.length -1;

        while(start != end){
            if(nums[start] + nums[end] > tmp){
                end--;
            }
            else if(nums[start] + nums[end] < tmp){
                start++;
            }
            else if(nums[start] + nums[end] == tmp){
                res.push(new Array(nums[i],nums[start],nums[end]));
                    start++;
            }
        }

        i++;
        tmp = 0 - nums[i];
    }

    return res;
};


/** Solution 2: 回溯法.但效率也比较低
 * step 1: nums.length<3; return [];
 * step 2: every element can only be used once // var used=[]; if(used[i]){ continue ;}else{ used[i]=true; excute; }
 * step 3: [-1, -1, 2] [-1, 2, -1] [2, -1, -1], the same, // Elements in a solution (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
 * step 4: backTracking function
 */
var threeSum = function(nums) {
    if(nums.length<3) { return []; } // step 1
    nums.sort(function(val1,val2) {
        return val1>val2?1:val1<val2?-1:0;
    });
    // console.log(nums);
    var solution = [];
    var result = [];
    var used = [];
    var backTracking = function(m, n){ // step 4
        if(m==n){
            // console.log(solution);
            if(solution[0]+solution[1]+solution[2]===0){
                return result.push(solution.slice(0));
            }
            return false;
        }else{
            var last_num;
            for(var i=0; i<nums.length; i++){
                if(used[i]) { continue; } // step 2
                if(last_num==nums[i]) { continue; }
                if(m>0 && solution[m-1]>nums[i]) { continue; } // step 3
                used[i] = true;
                last_num = nums[i];
                solution[m] = nums[i];
                arguments.callee(m+1, n);
                used[i] = false;
            }
        }
    }
    backTracking(0, 3);
    return result;
};

var list = [];
console.log(threeSum(list));