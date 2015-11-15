/**
 * Created by HimomoO on 11/10/15.
 */


/**
 *
 * @type {string}
 */
function removeDuplicate(str){
    if(str.length <= 1) return str;

    var sample = [];
    var res = '';

    for(var i = 0; i < str.length; i++){
        if(typeof sample[str[i]] == 'undefined') {
            sample[str[i]] = 1;
            res += str[i];
        }
        //else


    }

    //console.log(sample);

    return res;
}
//
//function removeDuplicate(str){
//    if(str.length <= 1) return str;
//
//    var sample = [];
//
//    for(var i = 0; i < str.length; i++){
//        console.log(str);
//        if(typeof sample[str[i]] == 'undefined') sample[str[i]] = 1;
//        else if(sample[str[i]] == 1){
//            str = str.substring(0,i) + str.substring(i+1);
//
//            console.log('i:' + i + ' val:' + str[i] + ' ' + str );
//            i--;
//        }
//    }
//
//    //console.log(sample);
//
//    return str;
//}

var s1 = '';
var s2 = 's';
var s3 = 'sssss';    //s
var s4 = 'ser12321'; //ser123

//console.log(removeDuplicate(s1));
//console.log(removeDuplicate(s2));
console.log(removeDuplicate(s3));
console.log(removeDuplicate(s4));