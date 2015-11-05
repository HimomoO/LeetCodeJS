/**
 * Created by HimomoO on 11/5/15.
 */
/**
 *
 */

function Vertex(label){

    this.label = label;
    this.visited = false;

}

function Graph(v){

    this.Vertices = v;//vertices至高点

    this.edges = 0;

    this.adj = [];

    for(var i =0; i <this.vertices;++i){

        this.adj[i] = [];

        this.adj[i].push('');

    }

    this.addEdge = addEdge;

    function addEdge(){

        this.adj[v].push(w);

        this.adj[w].push(v);

        this.edges++;

    }

    this.toString = toString;

    this.marked = [];//保存已访问过的顶点

    for(var i=0;i<this.vertices;++i){

        this.marked[i] = false;//初始化为false

    }

}


function dfs(v){

    this.marked[v] = true;

    //if语句在这里不是必须的

    if(this.adj[v] != undefined){

        console.log("Visited vertex: " + v );

        for (var w in this.adj[v]){

            if(!this.marked[w]){

                this.dfs(w);

            }

        }

    }

}

g=new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
console.log(g);
//dfs(g);