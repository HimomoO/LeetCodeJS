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
 * Solution: 352ms. 使用sorted将原字符串每个子串排序（split排序再join），然后判断之前类似值是否存在，若存在则把原子串传入
 * 最后返回mapping中所有具有相同字母的子串集合
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   strs = strs.sort();
   var mapping = {};
   for (var i = 0; i < strs.length; i++) {
      var str = strs[i];
      var sorted = str.split('').sort().join('');
//console.log(sorted);

      if (mapping[sorted] === undefined) {
          mapping[sorted] = [str];
      } else {
          mapping[sorted].push(str);
      }
   }
   //console.log(mapping);
   var output = [];
   for (var arr in mapping) {
      //console.log(mapping[arr])
      output.push(mapping[arr]);
   }

   return output;
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
