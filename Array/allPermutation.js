/**
 * Created by HimomoO on 11/20/15.
 */
/**
 * Generate all possible permutation for input n
 */

/**
 * @param n
 */
var allPermutation = function(n){
    var spl = [];

    for(var i = 0; i < n; i++) spl[i] = i+1;

    function swap(a,b){
        var tmp = spl[a];
        spl[a] = spl[b];
        spl[b] = tmp;
    }

    function cal(start){
        if(start == n - 1){
            console.log(spl);
            return;
        }
        for(var i = start; i < n; i++){
            swap(start,i);
            cal(start + 1);
            swap(start,i);
        }
    }
    cal(0);

    return;
};

var t1 = 3;
var t2 = 0;

allPermutation(t1);
allPermutation(t2);