/**
 * Created by HimomoO on 10/27/15.
 */
/**
 * Create a for loop that iterates up to 100 while outputting
 * "fizz" at multiples of 3,
 * "buzz" at multiples of 5
 *  and "fizzbuzz" at multiples of 3 and 5
 */

(function(){
    for( var i = 1; i <= 100 ; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log(i + ' fizzbuzz');
            continue;
        }

        if(i%3 == 0)console.log(i + ' fizz');

        if(i%5 == 0)console.log(i + ' buzz');
    }
})();