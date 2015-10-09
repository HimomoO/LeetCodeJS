/**
 * //3，判断一个字符串中出现次数最多的字符，统计这个次数
 * Input str = 'asdfssaaasasasasaa';
 * Output 9
 */


/**
 * Solution： 采用类似于two sum的算法，将对应字母的出现数存入数组，如arr['a'] = 9，然后通过for 循环数组来选出最大值返回
 * 注意：
 * 1. 对比typeOf的时候一定要用引号，否则出现NaN： typeof tmp[str[i]] == 'undefined'
 * 2. 循环遍历一般数组可用for(var index in tmp)，需要注意的是这个index指的是index，不是值
 * 3. JS没有indexOf()！！
 *
 */
var maxNumInStr = function(str){
    var tmp = {};
    for(var i = 0; i < str.length ; i++){
        if(typeof tmp[str[i]] == 'undefined'){
            tmp[str[i]] = 1;
        }
        else
            tmp[str[i]] += 1;
    }
    console.log(tmp);

    var max = 0;

    for(var k in tmp){
        if(tmp[k] >= max)
            max = tmp[k] ;
    }

    return max;

};

var list = "abbb";
console.log(maxNumInStr(list));
