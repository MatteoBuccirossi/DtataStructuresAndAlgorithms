class Stack{
    constructor(array){
        this.array = array ? array : [];
    }
}


Stack.prototype.getBuffer = function (){
    return this.array.slice();
}

Stack.prototype.isEmpty = function (){
    return this.array.length == 0;
}

Stack.prototype.peek = function(){
    return this.array[this.array.length -1 ];
}

Stack.prototype.push = function(val){
    this.array.push(val);
}

Stack.prototype.pop = function(){
    this.array.pop();
}

Stack.prototype.search = function(val){
    let buff = new Stack(this.getBuffer());
    while(!(buff.isEmpty())){
        if(buff.peek() == val){
            return true;
        }else{
            buff.pop();
        }
    }
    return false;
}


let stack = new Stack([55,44,55,66,88,99,77,33,22,11,00]);
stack.push(8);


console.log(stack.search(454), stack.getBuffer());