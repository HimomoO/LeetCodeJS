/**
 * Created by HimomoO on 11/11/15.
 */
/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 */

/**
 * Solution 160ms. 先把prefix设成str[0]，然后一个个对下一个对比，只从最小长度开始。 需要注意的是若有element = ''则prefix是''
 * 另外while不能用s1做判断否则若s1=' '或者''或者'0'可能会判断失误。
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    if(strs.length === 1) return strs[0];

    var idx = 1;
    var prefix = strs[0]+'';

    while(strs[idx] !== undefined){
        var l = Math.min(prefix.length, strs[idx].length);
        if(l === 0) return '';

        var i;
        for (i = 0; i < l; i++) {
            if (prefix[i] !== strs[idx][i]) break;
        }
        prefix = prefix.substring(0, i);

        idx++;
    }

    return prefix;
};

var t1 = ['123','12009','12898934','128']; //12
var t2 = ['aa','a']; //a
var t3 = ["abab","aba",""]; //''
var t4 = ['123','456','789']; // ''

console.log(longestCommonPrefix(t1));
console.log(longestCommonPrefix(t2));
console.log(longestCommonPrefix(t3));
console.log(longestCommonPrefix(t4));