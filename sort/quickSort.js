/**
 * 快速排序通常明显比同为Ο(n log n)的其他算法更快，因此常被采用，而且快排采用了分治法的思想，所以在很多笔试面试中能经常看到快排的影子。可见掌握快排的重要性。
 从数列中挑出一个元素作为基准数。
 分区过程，将比基准数大的放到右边，小于或等于它的数都放到左边。
 再对左右区间递归执行第二步，直至各区间只有一个数。

 */

var quickSort = function(array){

    var Sort = function(left,right){
        if(left == right) return;

        var key = array[left];
        var start = left;
        var end = right;

        while(right > left){
            if(array[right] >= key){
                right--;
            }
            else{
                array[left] = array[right];
                while(right > ++left){
                    if(array[left] > key){
                        array[right] = array[left];
                        break;
                    }
                }
            }
        }

        if(start == left){
            Sort(++left,end);
            return
        }

        array[left] = key;

        Sort(start,left);
        Sort(right,end);
    }

    Sort(0,array.length - 1);
    return array;
};

var t1 = [22,0,4,6,22,102,31];
var t2 = [0,1,2,44,4,324,5,65,6,6,34,4,5,6,2,43,5,6,62,43,5,1,4,51,56,76,7,7,2,1,45,4,6,7];

console.log(quickSort(t1));
console.log(quickSort(t2));
