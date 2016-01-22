/**
 * Write a function to generate the generalized abbreviations of a word.

 Example:
 Given word = "word", return the following list (order does not matter):
 ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]

 */

/**
 * https://segmentfault.com/a/1190000004187690
 */
var generateAbbreviations = function(word) {
    if(word.length == 0) return [];
    var res = [];
    res.push(word);

    for(var i = 1; i < word.length ; i++){
        abbrev(word,i);
    }

    function abbrev(target,length){
        for(var j = 0; j < target.length - length + 1 ; j++){
            res.push(target.substring(0,j-1) + length + target.substring(j+length-1,target.length));
        }
    }

    res.push(''+word.length);
    return res;
};

var t1 = 'word';
console.log(generateAbbreviations(t1));