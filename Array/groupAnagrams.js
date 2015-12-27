/**
 * Created by HimomoO on 11/20/15.
 */
/**
 * Given an array of strings, group anagrams together.

 For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
 Return:

 [
 ["ate", "eat","tea"],
 ["nat","tan"],
 ["bat"]
 ]
 Note:
 For the return value, each inner list's elements must follow the lexicographic order.
 All inputs will be in lower-case.

 Amazon Uber Facebook
 */

/**
 * Solution: 需要使用hash map
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
};

var t1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
//[
//    ["ate", "eat","tea"],
//    ["nat","tan"],
//    ["bat"]
//]
var t2 = [ "nat","eat", "bat"]; //"bat", "eat", "nat"
var t3 = [];

console.log(groupAnagrams(t1));
console.log(groupAnagrams(t2));
console.log(groupAnagrams(t3));
