/**
 * 1. JS 面对对象中继承的实现
 * @param name
 * @constructor
 */
function Person(name){
    this.name = name;
}

Person.prototype.showName = function(){
    console.log(this.name);
}

function Worker(name, job){
    Person.apply(this,arguments)
    this.job = job;
}
for(var i in Person.prototype){
    Worker.prototype = Person.prototype;
}
new Worker('sl', 'coders').showName();

/**
 * 2.Call() && Apply()
 * 以下代码无论是采用animal.showName.call或是animal.showName.apply方法，运行的结果都是输出一个"Cat"的字符串。
 * 说明showName方法的调用者被换成了cat对象，而不是最初定义它的animal了。这就是call和apply方法的妙用！
 * /

 /**定义一个animal类*/
function Animal(){
    this.name = "Animal";
    this.showName = function(){
        console.log(this.name);
    }
}
/**定义一个Cat类*/
function Cat(){
    this.name = "Cat";
}

/**创建两个类对象*/
var animal = new Animal();
var cat = new Cat();

//通过call或apply方法，将原本属于Animal对象的showName()方法交给当前对象cat来使用了,并改变了this值的指向
animal.showName.call(cat,","); // == animal.showName.apply(cat,[]);
animal.showName(); //'Animal', 说明this只是单次的被改变？？

/**
 * Bind() Study
 * @returns {Array.<T>}
 */

function Person(name){
    this.nickname = name;
    this.distractedGreeting = function() {

        setTimeout(function(){
            console.log("Hello, my name is " + this.nickname);
        }, 500);
    }
}

/**
 * Bind() Study
 * @returns {Array.<T>}
 */

function list() {
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// 创建函数并给函数预设的打头参数
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

console.log(list1);
console.log(list2);
console.log(list3);

function a(xx) {
    this.b = xx;
}
var o = {};
a.apply(o, [10]);
console.log(a.b);    // undefined
console.log(o.b);    // 10

var m = {
    "x" : 1
};
function foo(y) {
    console.log(this.x + y);
}
foo.apply(m, [5]);
foo.call(m, 5);
var foo1 = foo.bind(m, 5);
foo1();