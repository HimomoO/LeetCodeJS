/**
 * Created by HimomoO on 10/29/15.
 */
/**
 *
 1. 给三条线段的长度，问是否能构成等腰三角形，等边三角形或其他
 解法：注意无法构成三角形的情况

 TIPS：两边和大于第三边，两边差小于第三边。
 */

/**
 * Solution
 */
var triangles = function(a,b,c){

    function sum(x,y,z){
        return x + y > z;
    }
    function diff(x,y,z){
        return x - y < z;
    }

    if(sum(a,b,c)&&sum(c,b,a)&&sum(a,c,b)&&diff(a,b,c)&&diff(a,c,b)&&diff(c,b,a)){
        if(a == b && b == c) return 'Equilateral triangle';
        if(a == b || b == c || a == b) return 'Isosceles triangle';
        return 'Normal triangle';
    }
    return false;
};

var t1 = [3,4,5];  //true
var t2 = [,4,5];   //false
var t3 = [5,5,4];  //True, 等腰
var t4 = [5,5,5];  //True, 等边
var t5 = [5,11,5]; //false



console.log(triangles(t1[0],t1[1],t1[2]));
console.log(triangles(t2[0],t2[1],t2[2]));
console.log(triangles(t3[0],t3[1],t3[2]));
console.log(triangles(t4[0],t4[1],t4[2]));
console.log(triangles(t5[0],t5[1],t5[2]));
