/**
 * Created by HimomoO on 11/11/15.
 */
/*
 // input: 2 integer arrays, A[] B[]
 // output: boolean, true if A[] and B[] have eaxctly the same elements
 // example" A = [12, 24, 33, 22], B=[33, 22, 24, 12] = > true

 */

function sameValueinArr(a1,a2){
    if(a1.length == 0 || a2.length == 0) return false;

    var sample = [];

    for(var x in a1){
        if(!sample[a1[x]])
            sample[a1[x]] = true;

    }

    for(var x in a2){
        if(sample[a2[x]]) return true;
    }

    return false;

}
var t1=[12,24,33,22],t2=[33,22,24,12];  //true

var t3=[12,24,33,22],t4=[1,2,3,4];  //false

console.log(sameValueinArr(t1,t2));
console.log(sameValueinArr(t3,t4));