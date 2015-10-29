/**
 * Created by HimomoO on 10/29/15.
 */
/**
 * 给一个string s和一个string t， 返回一共能在s中删除t多少次。
 * 如 s = aabb,t = ab, return 2
 * s = aabcbdc, t = abc, return 1
 */


/**
 * Solution: 使用indexOf检查字符串是否存在（不存在返回-1，indexOf可以检查长字符串）
 *           再使用replace将target字符串替换成''，replace第一项可以使用字符串
 *           注意的是：并非在原string上更改，只是返回替换后的值 所以需要 s = s.replace(..)
 * @param s
 * @param t
 * @returns {number}
 */
var deleteSubstring = function(s,t){
    if(s.length == 0 || s.length < t.length) return 0;
    var res = 0;

    while(s.indexOf(t) != -1){
        s = s.replace(t,'');
        console.log(s);
            res++;
    }

    return res;
}


var s1 = 'aabb',t1 = 'ab'; //2
var s2 = 'aabcbdc',t2 = 'abc'; //1
var s3 = '',t3 = '2';  //0
var s4 = 'aabb',t4 = 'c'; //0
var s5 = 'aaaaabcbcbcbcbc',t5 = 'bc'; //5
var s6 = 'aaaaabcbcbcbbcc',t6 = 'bc'; //5

console.log('1: ' + deleteSubstring(s1,t1));
console.log('2: ' + deleteSubstring(s2,t2));
console.log('3: ' + deleteSubstring(s3,t3));
console.log('4: ' + deleteSubstring(s4,t4));
console.log('5: ' + deleteSubstring(s5,t5));
console.log('6: ' + deleteSubstring(s6,t6));
