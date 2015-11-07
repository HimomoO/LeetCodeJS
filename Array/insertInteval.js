/**
 * Created by HimomoO on 11/6/15.
 */
/**
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

 You may assume that the intervals were initially sorted according to their start times.

 Example 1:
 Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

 Example 2:
 Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

 This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].

 *
 */
function Interval(start, end) {
    this.start = start;
    this.end = end;
}
/**
 * Solution 1: 总和mergeInteval的解法只需要在那基础上多一步push,再排序，然后merge..下次看看有没别的解法
 *
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length == 0) return new Array(newInterval);

    intervals.push(newInterval);
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

//var i1 = new Interval(1,2);
//var i2 = new Interval(3,5);
//var i3 = new Interval(6,7);
//var i4 = new Interval(8,10);
//var i5 = new Interval(12,16);
//var target = new Interval(4,9);
//var list = new Array(i1,i2,i3,i4,i5);   //[1,6],[8,10],[15,18].

var i1 = new Interval(1,3);
//var i2 = new Interval(6,9);
var target = new Interval(5,6);
var list = new Array(i1);   //[1,5],[6,9]
console.log(insert(list,target));
