
/**
 * 冒泡排序的原理非常简单，它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。步骤：
 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
 对第0个到第n-1个数据做同样的工作。这时，最大的数就“浮”到了数组最后的位置上。
 针对所有的元素重复以上的步骤，除了最后一个。
 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。


 * def bubble_sort(arry):
 n = len(arry)                   #获得数组的长度
 for i in range(n):
 for j in range(1,n-i):
 if  arry[j-1] > arry[j] :       #如果前者比后者大
 arry[j-1],arry[j] = arry[j],arry[j-1]      #则交换两者
 return arry
 */

var bubbleSort = function(array){
    var temp;
    for(var i = 0; i < array.length ; i++){
        for(var j = 0; j < array.length; j++){
            if(array[i] < array[j]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

var t1 = [22,0,4,6,22,102,31];

console.log(bubbleSort(t1));