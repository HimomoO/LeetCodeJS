/**
 * Created by HimomoO on 11/12/15.
 */
/**
 * Given a string s, partition s such that every substring of the partition is a palindrome.

 Return all possible palindrome partitioning of s.

 For example, given s = "aab",
 Return

 [
 ["aa","b"],
 ["a","a","b"]
 ]

 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if(s.length === 0) return [[]];
    if(s.length === 1) return new Array([s]);


};

var s1 = 'aab';
var s2 = 'a';
var s3 = '';

console.log(partition(s1));  //[['aa','b']['a','a','b']]
console.log(partition(s2));  //[['a']]
console.log(partition(s3));  //[['']]
