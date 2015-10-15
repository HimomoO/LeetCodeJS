/**
 * Given a digit string, return all possible letter combinations that the number could represent.

 A mapping of digit to letters (just like on the telephone buttons) is given below.



 Input:Digit string "23"
 Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 Note:
 Although the above answer is in lexicographical order, your answer could be in any order you want.

 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    //console.log(digits[0]);
    //if(digits.length === 0) return [];
    //if(digits == "1") return null;
    //if(digits == "0") return [" "];

    var phone = [];
    phone[0] = [' '];
    phone[1] = [''];
    phone[2] = ['a','b','c'];
    phone[3] = ['d','e','f'];
    phone[4] = ['g','h','i'];
    phone[5] = ['j','k','l'];
    phone[6] = ['m','n','o'];
    phone[7] = ['p','q','r','s'];
    phone[8] = ['t','u','v'];
    phone[9] = ['w','x','y','z'];

    var res = [];

    function Cal(arr,count){
        console.log("arr:" + arr + " count " + count);
        if(count === 0 ) return res.push(arr);

        var index = parseInt(digits[count-1]);
        console.log("index" + index);
        for( var i = 0; i < phone[index].length; i++){
            Cal(res.push(phone[index][i],count-1));
        }

    }

    Cal([],digits.length);


    return res;
};

var test = "23";
console.log(letterCombinations(test));