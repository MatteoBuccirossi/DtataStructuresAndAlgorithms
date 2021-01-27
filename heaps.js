//indices: node -> n;
// parent -> (n-1)/2; 
// left child -> (n*2)+1;
// (n*2)+2  

class Heap{
    constructor(){
        this.items = [];
    }
}

Heap.prototype.swap = function(i1, i2){
    [this.items[i1], this.items[i2]] = [this.items[i2], this.items[i1]];
}

Heap.prototype.parentIndex = function(i){
    return Math.floor((i-1)/2);
}

Heap.prototype.leftChildIndex = function(i){
    return Math.floor((i*2)+1);
}

Heap.prototype.rightChildIndex = function(i){
    return Math.floor((i*2)+2);
}

Heap.prototype.parent = function(i){
    return this.items[this.parentIndex(i)];
}

Heap.prototype.leftChild = function(i){
    return this.items[this.leftChildIndex(i)];
}

Heap.prototype.rightChild = function(i){
    return this.items[this.rightChildIndex(i)];
}

Heap.prototype.peek = function(){
    return this.items[0];
}

Heap.prototype.size = function(){
    return this.items.length;
}

class MinHeap extends Heap{};

MinHeap.prototype.bubbleDown = function(){
    let i = 0;
    while(this.leftChild(i) && this.leftChild(i) < this.items[i]){
        let smallerIndex = this.leftChildIndex(i);
        if(this.rightChild(i) && this.rightChild(i) < this.items[smallerIndex]){
            smallerIndex = this.rightChild(i);
        }
        this.swap(i, smallerIndex);
        i = smallerIndex;
    }
}

MinHeap.prototype.bubbleUp = function(){
    let i = this.items.length - 1;
    while(this.parent(i) && this.parent(i) < this.items[i]){
        console.log(i, this.items, this.parentIndex(i));
        this.swap( this.parentIndex(i), i);
        i = this.parentIndex(i);
    }
}

MinHeap.prototype.bubbleUpEvery = function(){
    for(let el of this.items){
        console.log(el);
        this.bubbleUp();
    }
}

let minHeap = new MinHeap();
minHeap.items = [12,2,23,4,13];
console.log(minHeap.items);
minHeap.bubbleDown();
console.log(minHeap.items);
