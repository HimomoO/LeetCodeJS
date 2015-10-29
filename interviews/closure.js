/**
 * Created by HimomoO on 10/28/15.
 */
//function say667() {
//    // Local variable that ends up within closure
//    var num = 666;
//    var sayAlert = function() { console.log(num); }
//    num++;
//    return sayAlert;
//}
//
//var sayAlert = say667();
//sayAlert(); //666
//sayAlert(); //666

/**
 * Learning: Closure能使内部函数和变量一直保持在内存中，见例一例二。 二中当新建了一个实例时，cat是指向实例中的新变量。上一个例子则显示了
 * @type {{publicfunction}}
 */
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

/**
 * 一个非常beautiful的closure例子。（但是话说这里的IIFE有什么用？）
 * 可以看到a函数中的public function是对外的打开的。private function通过public function被调用同时被保护。 private variable只有在内部能被访问。
 */
a = (function () {
    var privateVariable = 'hello';
    var privatefunction = function () {
        console.log(privateVariable);
    };

    return {
        publicfunction : function () {
            privatefunction();
        }
    }
})();

//a(); //error
//a.privatefunction(); //error
a.publicfunction();  //'hello'