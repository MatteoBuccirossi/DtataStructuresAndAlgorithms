class Queue{
    constructor(array){
        this.array = array ? array : [];
    }
}
Queue.prototype.getBuffer = function(){
    return this.array.slice();
}
Queue.prototype.push = function(val){
    this.array.push(val);
}
Queue.prototype.pop = function(){
    this.array.shift();
}
Queue.prototype.isEmpty = function(){
    return this.array.length == 0; 
}
Queue.prototype.peek = function(){
    return this.array[0];
}
Queue.prototype.search = function(val){
    let buff = new Queue(this.getBuffer());
    while(!(buff.isEmpty())){
        if(buff.peek() == val){
            return true;
        }
        buff.pop();
    }
    return false;
}

let queue = new Queue([77777, 666, 8888, 999, 333]);
console.log( queue.search(8),queue.getBuffer());
