/**
 * Created by HimomoO on 11/11/15.
 */
/**
 * 3.在一个有序数组中有一个数是重复的，返回最后一个这个数
 */

function find(nums){
    if(nums.length <= 1) return null;
    var tmp = [];
    for(var i = nums.length - 1; i >= 0; i--){
        if(typeof tmp[nums[i]] == 'undefined') tmp[nums[i]] = i;
        //console.log(tmp);
        else return tmp[nums[i]];
    }

    return null;
}
var nums1 = [1,1,1,1,1,1,2];  // 1 at 5
var nums2 = [1,2,3,4,7,5,6,7,8,9]; //7 at 7
var nums3 = [1]; //null
var nums4 = [1,2,3]; //null

console.log(find(nums1));
console.log(find(nums2));
console.log(find(nums3));
console.log(find(nums4));