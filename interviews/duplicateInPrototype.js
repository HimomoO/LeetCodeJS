/**
 * Make this work in JavaScript:

 [1,2,3,4,5].duplicate();

 */


Array.prototype.duplicate = function () {
    var arr = this;
    return this.push.apply(arr,arr);
};

//Array.prototype.duplicate=function(){
//    var arr = this;
//    for(var i = 0; i < arr.length; i++){
//        this.push(arr[i]);
//        //console.log(arr[i]);
//    }
//};

var list = [1,2,3,4,5];
list.duplicate();
console.log(list);
