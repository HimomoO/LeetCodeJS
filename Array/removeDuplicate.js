/**
 * Created by HimomoO on 11/5/15.
 */
/**
 *
 */

function removeDuplicate(arr)

{

    var result ={};

    var newArr=[];

    for(var i=0;i<arr.length;i++)

    {

        if(!result[arr[i]])

        {

            newArr.push(arr[i])

            result[arr[i]]=1

        }

    }

    return newArr

}

var a1 = [0,0,1,1,2]; //0,1,2
var a2 = [0,1,2]; //0,1,2
