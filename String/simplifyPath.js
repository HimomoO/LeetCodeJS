/**
 * Created by HimomoO on 11/10/15.
 */
/**
 * For example,
 path = "/home/", => "/home"
 path = "/a/./b/../../c/", => "/c"
 click to show corner cases.

 Corner Cases:
 Did you consider the case where path = "/../"?
 In this case, you should return "/".
 Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
 In this case, you should ignore redundant slashes and return "/home/foo".

 */

/**
 * Solution 1: 148ms. 用stack的idea做。先按照split（'/'）分一遍， 需要注意
 * '..'意味着要出栈上一个，返回上一级菜单
 * '.'和''不作任何动作
 * 其余的作为地址带上/加进去
 * 注意如果最后结果长度为零，''，则需要加上一个‘/’
 */
var simplifyPath = function(path) {
    if(path.length === 0) return "";

    var pathList = [];
 var res = [];
 var str = '';
 pathList = path.split('/');

 for(var i = 0; i < pathList.length; i++){
    if(pathList[i] == '' || pathList[i] == '.') continue;
    if(pathList[i] == '..') {
     res.pop();

     continue;
    }
    res.push('/' + pathList[i]);
 }

 for(var x in res){
    str += res[x];
 }
    return str.length == 0 ? '/':str;
};

var p1 = "/home/";    // /home
var p2 = "/a/./b/../../c/";  //  /c
var p3 = "/../";   // "/"
var p4 = "/home//foo//"; //"/home/foo"

console.log(simplifyPath(p1));
console.log(simplifyPath(p2));
console.log(simplifyPath(p3));
console.log(simplifyPath(p4));