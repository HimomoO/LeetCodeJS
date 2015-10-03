/**
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

 For example,
 If n = 4 and k = 2, a solution is:

 [
 [2,4],
 [3,4],
 [2,3],
 [1,2],
 [1,3],
 [1,4],
 ]

 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var total = [];
    var result = [];

    for( var i = 1; i <= n ; i++){
        total.push(i);
    }


    function cal(arr,tmp,l){
        console.log(arr.toString());
        for(var j = 0; j < arr.length; j++){
            tmp.push(arr[j]);
            l--;
            if(l > 0) {
                arr.splice(j, 1);
                console.log("tmp after splice" + tmp.toString() + " and l is " + l + " arr is " + arr)
                cal(arr,tmp,l);
            }
            else{
                result.push(tmp);
                console.log("tmp is " + tmp);
            }

        }
    }

    cal(total,[],k);

    return result;

};

console.log("the final result is " + combine(4,2));