/**
 * Given two strings s and t, write a function to determine if t is an anagram of s.

 For example,
 s = "anagram", t = "nagaram", return true.
 s = "rat", t = "car", return false.

 Note:
 You may assume the string contains only lowercase alphabets.

 Follow up:
 What if the inputs contain unicode characters? How would you adapt your solution to such case?

 */

/**
 * Solution 1: 使用visited array, 储存并遍历，若结果不一则返回false。 O（3n）
 */
//var isAnagram = function(s, t) {
//    if(s.length != t.length) return false;
//
//    var visited = [];
//    for(var x in s)
//        if(typeof visited[s[x]] === 'undefined') visited[s[x]] = 1;
//        else visited[s[x]]++;
//
//    console.log(visited);
//
//    for(var y in t){
//        console.log(visited[t[y]]);
//        if(typeof visited[t[y]] === 'undefined') return false;
//        else {
//
//            visited[t[y]]--;
//        }
//    }
//    console.log(visited);
//    for(var z in visited)
//        if(visited[z] !== 0) return false;
//
//    return true;
//};

/**
 * Solution 2: 212ms. string to array后sort，再对比
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;

    var arr1 = s.split('');
    var arr2 = t.split('');
    arr1.sort();
    arr2.sort();

    for(var i = 0; i < arr1.length; i++)
        if(arr1[i] != arr2[i])
            return false;

    return true;
};

var s1 = 'anagram';
var t1 = 'nagaram';
var s2 = 'rat';
var t2 = 'car';
var s3 = '';
var t3 = '';
var s4 = 'aacc';
var t4 = 'ccac';

console.log(isAnagram(s1,t1));  //true
console.log(isAnagram(s2,t2));  //false
console.log(isAnagram(s3,t3));  //true
console.log(isAnagram(s4,t4));  //false
