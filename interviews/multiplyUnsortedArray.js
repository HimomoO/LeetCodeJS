/**
 * Created by HimomoO on 11/10/15.
 */
/**
 *  input{1,2,3,4,5}
 output{2*3*4*5, 1*3*4*5, 1*2*4*5, 1*2*3*5,1*2*3*4}

 */

/**
 * Solution 2: O(n)
 * Solution 1 的优化，并不需要嵌套扫描，只要一次扫每次把上一次的结果存在相应位置即可
 */
function multiply(arr){
    var left = new Array(arr.length);
    //console.log(left);
    var right = new Array(arr.length);
    var tmp = arr[0];
    left[0] = 1;
    right[arr.length - 1] = 1;

    var res = [];

    for(var i = 1; i < arr.length; i++){
        left[i] = tmp;
        tmp *= arr[i];
    }

    tmp = 1;
    for(var i = arr.length - 1; i >= 0; i--){
        right[i] = tmp;
        tmp *= arr[i];
    }

    for(var i = 0; i < arr.length ; i++) {
        res[i] = left[i] * right[i];
    }

    return res;
}

/**
 * Solution 1: O(n2)
 * 从前面扫，从后面扫，算出一个index左边所有的乘积和右边所有的乘积 然后相乘返回
 */
//function multiply(arr){
//    var left = [];
//    var right = [];
//    var res = [];
//
//    for(var i = 0; i < arr.length; i++){
//        left[i] = 1;
//        for(var j = i + 1; j < arr.length; j++){
//            left[i] *= arr[j];
//        }
//    }
//
//
//    for(var i = arr.length - 1; i >= 0; i--){
//        right[i] = 1;
//        for(var j = i - 1; j >= 0; j--){
//            right[i] *= arr[j];
//        }
//    }
//
//    for(var i = 0; i < arr.length ; i++) {
//        res[i] = left[i] * right[i];
//    }
//
//    return res;
//}
var t1 = [1,2,3,4,5]; // [120,60,40,30,24]
var t2 = [1,1,1,2,3]; //[6,6,6,3,2]

console.log(multiply(t1));
console.log(multiply(t2));