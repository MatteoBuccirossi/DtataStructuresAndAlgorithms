class UndiredctedGraph{
    constructor(){
        this.edges = {};
    }
}

UndiredctedGraph.prototype.addVertex = function(vertex){
    this.edges[vertex] = {};
}
// from here on out v1 and v2 stand for vertex1 and vertex2 no confusion allowed
UndiredctedGraph.prototype.addEdge = function(v1, v2, weight){
    if(weight == undefined){
        weight = 0;
    }
    this.edges[v1][v2] = weight;
    this.edges[v2][v1] = weight;
}

UndiredctedGraph.prototype.removeEdge = function(v1, v2){
    try{
        delete this.edges[v1][v2];
        delete this.edges[v2][v1];
    }catch(e){
        console.log('Tried to remove a non-existing edge. \n Complete error log:' + e);
        return;
    }
}

UndiredctedGraph.prototype.removeVertex = function(vertex){
    try{
        Object.keys(this.edges[vertex]).forEach((v2)=>{
            this.removeEdge(vertex, v2);
        });
        delete this.edges[vertex];
    }catch(e){
        console.log('Tried to remove a non-existing node. \n Complete error log:' + e);
        return;
    }
}
UndiredctedGraph.prototype.print = function(){
    console.log(this.edges);
}
class DirectedGraph extends UndiredctedGraph{}

//for the directed graph v1 stands for the origin while v2 for the destination
DirectedGraph.prototype.addEdge = function(origin, destination, weight){
    try{
        if(weight === undefined){
            weight = 0;
        }
        this.edges[origin][destination] = weight;
    }catch(e){
        console.log('Tried adding an edge to a non-existing node. \n Complete error log:' + e);
        return;
    }
}

DirectedGraph.prototype.removeEdge = function(v1, v2){
    try{
        delete this.edges[v1][v2];
    }catch(e){
        console.log('Tried to remove a non-existing edge. \n Complete error log:' + e);
        return;
    }
}

DirectedGraph.prototype.removeVertex = function(vertex){
   try{
       Object.keys(this.edges[vertex]).forEach((v2)=>{
           this.removeEdge(vertex, v2);
       });
       delete this.edges[vertex];
   }catch(e){
    console.log('Tried to remove a non-existing node. \n Complete error log:' + e);
    return;
   }
}


DirectedGraph.prototype.BFS = function(vertex){
    let queue = [];
    let visited = {};

    queue.push(vertex);
    while(queue.length){
        vertex = queue.shift();
        if(!visited[vertex]){
            visited[vertex] = true;
            console.log(vertex);
            for(let adj in this.edges[vertex]){
                queue.push(adj);
            }
        }
    }
}


DirectedGraph.prototype.DFSHelper = function(visited, vertex){
        visited[vertex] = true;
        console.log(vertex);
            for(let adj in this.edges[vertex]){
                if(!visited[adj]){
                    this.DFSHelper(visited, adj);
                }
            }
        return;
}

DirectedGraph.prototype.DFS = function(vertex){
    let visited = {};
    this.DFSHelper(visited, vertex);

}

DirectedGraph.prototype._isEmpty = function(obj){
    return Object.keys(obj).length == 0;
}

DirectedGraph.prototype._extractMin = function(q, dist){
    let minimumDistance = Infinity;
    let minimumDistanceNode = null;
    for(let node in q){
        if(dist[node] <= minimumDistance){
            minimumDistance = dist[node];
            minimumDistanceNode = node;
        }
    }
    return minimumDistanceNode;
}

DirectedGraph.prototype.dijkstra = function(source){
    let Q = {};
    let dist = {};
    for(let vertex in this.edges){
        dist[vertex] = Infinity;
        Q[vertex] = this.edges[vertex];
    }
    dist[source] = 0;
    while(!this._isEmpty(Q)){
        let u = this._extractMin(Q, dist);
        delete Q[u];
        for(let adj in this.edges[u]){
            console.log(this.edges[u]);
            let alt = dist[u] + this.edges[u][adj];
            if(alt < dist[adj]){
                dist[adj] = alt;
            }
        }
    }
    return dist;
}

DirectedGraph.prototype.TopologicalUtil = function(v, visited, stack){
    visited.add(v);
    for(let item in this.edges[v]){
        if(visited.has(item) == false){
            this.TopologicalUtil(item, visited, stack);
        }
    }
    stack.unshift(v);
}

DirectedGraph.prototype.topological = function(){
    let visited = new Set();
    let stack = [];

    for(let edge in this.edges){
        if(visited.has(edge) == false){
            this.TopologicalUtil(edge, visited, stack);
        }
    }
    return stack;
}
var g = new DirectedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('B', 'A');
g.addEdge('D', 'C');
g.addEdge('D', 'B');
g.addEdge('B', 'A');
g.addEdge('A', 'F');
g.addEdge('E', 'C');
console.log(g.topological());


