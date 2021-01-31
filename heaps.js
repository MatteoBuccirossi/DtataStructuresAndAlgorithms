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
MinHeap.prototype.bubbleDownEvery = function(){
    let index = 0;
    while(this.leftChild(index)){
        let smallerIndex = this.leftChildIndex(index);
        if(this.items[index] > this.items[smallerIndex]){
            this.swap(index, smallerIndex);
            index = 0;

        }else{
            index = smallerIndex;
        }
    }
}

MinHeap.prototype.sort = function(){
    let i = 0;
    while(this.items[i+1]){
        let smaller = this.items[i+1];
        if(smaller < this.items[i]){
            [this.items[i], this.items[i+1]] =  [this.items[i+1], this.items[i]];
            i = 0;
        }else{
            i++;
        }
    }
}

class MinHeapFinal extends MinHeap{}

MinHeapFinal.prototype.add = function(item){
    this.items[this.items.length] = item;
    this.bubbleUp();
}

MinHeapFinal.prototype.poll = function(){
    let item = this.items.shift();
    this.bubbleDown();
    return item;
}
MinHeapFinal.prototype.bubbleDown = function(){
    let i = 0;
    while(this.leftChild(i) && (this.leftChild(i) < this.items[i] || this.rightChild(i) < this.items[i])){
        let smallerIndex = this.leftChildIndex(i);
        if(this.rightChild(i) && ( this.rightChild(i) < this.leftChild(i))){
            smallerIndex = this.rightChildIndex(i);
        }
        this.swap(smallerIndex, i);
        i = smallerIndex;
    }
}

MinHeapFinal.prototype.bubbleUp = function(){
    let i = this.items.length-1;
    while(this.parent(i) && this.parent(i) > this.items[i]){
        this.swap(this.parentIndex(i), i);
        i = this.parentIndex(i);
    }
}

let minHeap = new MinHeapFinal();
for(let i = 10; i >  0; i--){
    minHeap.add(i);
}

class MaxHeap extends MinHeapFinal{}



MaxHeap.prototype.bubbleDown = function(){
    let i = 0;
    while(this.leftChild(i) && (this.leftChild(i) > this.items[i] || this.rightChild(i) > this.items[i])){
        let bigI = this.leftChildIndex(i);
        if(this.rightChild(i) && ( this.rightChild(i) > this.leftChild(i))){
            bigI = this.rightChildIndex(i);
        }
        i = bigI;
    }
}

MaxHeap.prototype.poll = function(){
    let item = this.items.shift();
    this.bubbleUp();
    return item;
}

MaxHeap.prototype.bubbleUp = function(){
    let i = this.items.length-1;
    while(this.parent(i) && this.parent(i) < this.items[i]){
        this.swap(this.parentIndex(i), i);
        i = this.parentIndex(i);
    }
}

