//function say667() {
//    // Local variable that ends up within closure
//    var num = 666;
//    var sayAlert = function() { num++;console.log(num); }
//
//    return sayAlert;
//}
//
//var sayAlert = say667();
//sayAlert();
//sayAlert();
//sayAlert();
//sayAlert();

//function f1(){
//    var n=999;
//    nAdd=function(){n+=1}
//    function f2(){
//        console.log(n);
//    }
//    return f2;
//}
//var result=f1();
//result(); // 999
//nAdd();
//result(); // 1000

//function cat(){
//    var name = 'Mo';
//    var age = 0;
//    var yearPass = function(){
//        age++;
//    };
//    return function(){
//        yearPass();
//        console.log(name + "'s age is " + age);
//    }
//}
//
//var catlife = cat();
//catlife();
//catlife();
//catlife();
//catlife();
//var catlife2 = cat();
//catlife2();

//a = (function () {
//    var privatefunction = function () {
//        console.log('hello');
//    };
//
//    return {
//        publicfunction : function () {
//            privatefunction();
//        }
//    }
//})();
//
//a(); //error
//a.privatefunction(); //error
//a.publicfunction();  //'hello'

console.log(5 % 2);