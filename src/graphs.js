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

let graph2 = new DirectedGraph();
graph2.addVertex(1);
graph2.addVertex(2);
graph2.addEdge(1, 2, 1);
graph2.addVertex(3);
graph2.addVertex(4);
graph2.addVertex(5);
graph2.addEdge(2, 3, 8);
graph2.addEdge(3, 4, 10);
graph2.addEdge(4, 5, 100);
graph2.addEdge(1, 5, 88);
graph2.print();
graph2.DFS('1');
