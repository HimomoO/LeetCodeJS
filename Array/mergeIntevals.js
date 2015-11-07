/**
 * Created by HimomoO on 11/6/15.
 */
/**
 * Given a collection of intervals, merge all overlapping intervals.

 For example,
 Given [1,3],[2,6],[8,10],[15,18],
 return [1,6],[8,10],[15,18].

 */


/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

function Interval(start, end) {
    this.start = start;
    this.end = end;
}
/**
 * Solution 1: 176ms. 初看很复杂，事实上先排序再遍历后需要改变的只有两种情况。
 * if(last包含next) splice(next)
 * if(next大于last) 合并并splice(next)
 */
var merge = function(intervals) {
    if(intervals.length <= 1) return intervals;


    intervals.sort(function(a, b){
        return a.start - b.start;
    });


    for(var i = 1; i < intervals.length; ){
        if(intervals[i].start <= intervals[i-1].end && intervals[i].end <= intervals[i-1].end) intervals.splice(i,1);
        else if(intervals[i].start <= intervals[i-1].end && intervals[i].end >= intervals[i-1].end){
            intervals[i-1].end = intervals[i].end;
            intervals.splice(i,1);
        }
        else i++;
    }

    return intervals;
};



//var i1 = new Interval(1,3);
//var i2 = new Interval(2,6);
//var i3 = new Interval(8,10);
//var i4 = new Interval(15,18);
//var list = new Array(i1,i3,i2,i4);   //[1,6],[8,10],[15,18].

var i1 = new Interval(1,7);
var i2 = new Interval(6,9);
var list = new Array(i1,i2);   //[1,9]
console.log(merge(list));
//
//Example 1:
//Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].
//    Example 2:
//Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].
//    This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
