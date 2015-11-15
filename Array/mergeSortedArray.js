/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

 Note:
 You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
 The number of elements initialized in nums1 and nums2 are m and n respectively.
 */


/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

 Note:
 You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
 The number of elements initialized in nums1 and nums2 are m and n respectively.
 */

/**
 * Solution 1:
 */
var merge = function(nums1, m, nums2, n) {
    while(n){
        nums1[m++]=nums2[--n];
    }
    console.log(nums1);
    nums1.sort(function(val1, val2){
        return val1 > val2?1:val1<val2?-1:0;
    })

};

//var merge = function(nums1, m, nums2, n) {
//    if(m === 0 && n === 0) return;
//    if(m === 0 && n !== 0){
//        for(var i = 0; i < n; i++){
//            nums1.push(nums2[i]);
//        }
//        console.log(nums1[0]);
//        if(nums1[0] === 0)
//            nums1.unshift();
//    }
//    else{
//        var curr1 = 0, curr2 = 0;
//
//        while(curr1 < m && curr2 < n){
//            if(nums1[curr1] <= nums2[curr2]) {
//                console.log("1: curr1 is " + curr1 + " curr2 is " + curr2);
//                curr1++;
//            }
//            if(nums1[curr1] > nums2[curr2]){
//                console.log("2: curr1 is " + curr1 + " curr2 is " + curr2);
//                nums1.splice(curr1,0,nums2[curr2]);
//                curr2++;
//            }
//
//        }
//
//        if( curr2 < n){
//            for(; curr2 < n; curr2++){
//                nums1.push(nums2[curr2]);
//            }
//
//        }
//    }
//
//    console.log("nums1 is " + nums1.toString());
//    console.log("nums2 is " + nums2.toString());
//
//
//};

var list1 = [0,2];
var list2 = [1];

console.log(merge(list1,2,list2,1));