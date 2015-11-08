/**
 * Created by HimomoO on 11/7/15.
 */
/**
 * Given two numbers represented as strings, return multiplication of the numbers as a string.

 Note: The numbers can be arbitrarily large and are non-negative.

 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var tmp1 = [], tmp2 = [];
    var res = [];
    var mul,tmp = 0;
    var potition;
    var resStr = '';

    for( var i = num1.length - 1; i >= 0; i--){
        tmp1.push(parseInt(num1[i]));
    }
    for( var i = num2.length - 1; i >= 0; i--){
        tmp2.push(parseInt(num2[i]));
    }

    //console.log(tmp1);
    //console.log(tmp2);

    for( var i = 0 ; i < tmp1.length ; i++){
        potition = i;
        for(var j = 0; j < tmp2.length ; j++){
            mul = tmp1[i] * tmp2[j];

            if(typeof res[potition] != 'undefined') {
                //console.log('1position:'+res[potition]);
                res[potition] = res[potition] + tmp + mul;
                //console.log('2position:'+res[potition]);
                if(res[potition] >= 10) {
                    tmp = res[potition] / 10 >>0 ;
                    res[potition] = res[potition] % 10;


                    // /tmp = parseInt(res[potition] / 10 >>0 );
                }
                //console.log('i:' +i + ' j:' + j + ' ' + tmp1[i] + ' * ' + tmp2[j] + ' = ' + mul + ' and ' + tmp + ' --- res is ' );
                //console.log(res);
            }
            else {
                res.push( tmp + mul % 10 );
                tmp = mul / 10 >> 0;
                //tmp = parseInt(mul / 10);
                //console.log(res);
            }

            //res.push(tmp + mul % 10);
            //console.log('res[' + j + '] = ' + res[j]);

            //console.log('i:' +i + ' j:' + j + ' ' + tmp1[i] + ' * ' + tmp2[j] + ' = ' + mul + ' and ' + tmp + ' --- res is ' );
            //console.log(res);
            if(tmp != 0){
                res.push(tmp);
                tmp = 0;
            }
            potition++;
            //console.log(res);
        }
    }

    for(var k = res.length - 1; k >= 0; k--){
        resStr += res[k];
    }

    return resStr
};

var n1 = '14',m1 = '10';  //100
var n2 = '9932',m2 = '5';  //49660
var n3 = '12',m3 = '10';  //120
var n4 = '115',m4 = '25000';  //0
var n5 = "123456789", m5 = "21";  //121932631112635260 v "121932631112635269"

//console.log((function(){ var res = multiply(n1,m1); return 'type:' + typeof res + ' result:' + res;})());
//console.log((function(){ var res = multiply(n2,m2); return 'type:' + typeof res + ' result:' + res;})());
//console.log((function(){ var res = multiply(n3,m3); return 'type:' + typeof res + ' result:' + res;})());
//console.log((function(){ var res = multiply(n4,m4); return 'type:' + typeof res + ' result:' + res;})());
console.log((function(){ var res = multiply(n5,m5); return 'type:' + typeof res + ' result:' + res;})());


