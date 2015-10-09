/**
 * Given a string, find the length of the longest substring without repeating characters.
 * For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3.
 * For "bbbbb" the longest substring is "b", with the length of 1.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var start = 0, end = 0;
    var startTmp = 0, endTmp = 0;
    var sum = 1;
    var max = 0;
    var tmp = {};
    tmp[s[0]] = 1;

    for(var i = 1; i < s.length ; i++){  //pwwkew
        console.log(i + " round, start: " + start + " end: " + end);
        if(typeof tmp[s[i]] == 'undefined'){
            console.log(s[i] + " !exist ");
            tmp[s[i]] = 1;
            sum +=1;
        }
        else{
            console.log(s[i] + " exist ");
            endTmp = i - 1;
            if(sum > max){
                console.log("sum:" + sum + " is large than max: " + max);
                start = startTmp;
                end = endTmp;
            }
            startTmp = i;
            console.log(tmp);
            tmp = {};
        }
    }
    //console.log(tmp);
    console.log(s.substring(start,end));
    return end - start;
};

//var lengthOfLongestSubstring = function(s) {
//
//    console.log(s.length);
//    var arr = [];
//    for( var i = 0; i < s.length ; i++){
//        arr.push(s[i]);
//    }
//
//    arr.sort();
//    console.log(arr);
//    var tmp = arr[0];
//
//    for( i = 1; i < arr.length;i++){
//        while(arr[i] == tmp){
//            console.log("arr["+i+"]:" + arr[i] + " == tmp:" + tmp + " arr:" + arr);
//            arr.splice(i,1);
//        }
//        tmp = arr[i];
//    }
//
//    console.log(arr);
//
//    return arr.length;
//};

var str = "pwwkew";
console.log(lengthOfLongestSubstring(str));