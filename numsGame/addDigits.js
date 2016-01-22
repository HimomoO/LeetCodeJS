/**
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

 For example:

 Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

 Follow up:
 Could you do it without any loop/recursion in O(1) runtime?

 Hint:

 A naive implementation of the above process is trivial. Could you come up with other methods?

 */

/**
 * Solution 1: 216ms. 两个循环嵌套，easy solution，但是因为嵌套所以效率较低，O(n2)。 Leetcode 有O（n）解法
 */
//var addDigits = function(num) {
//    if (num <= 9) return num;
//
//    var sum = 0;
//    while(num >= 10){
//        while (num > 0) {
//            sum += (num % 10);
//            num = parseInt(num / 10);
//        }
//        num = sum;
//        sum = 0;
//    }
//
//    return num;
//};

/**
 * Solution 2:
 */

var addDigits = function(num) {
    if(num < 10)
        return num;
    else
        return 1 + (num - 1) % 9;
};

console.log(addDigits(null));
console.log(addDigits(1));
console.log(addDigits(38));
console.log(addDigits(13580));