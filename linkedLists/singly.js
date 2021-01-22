class LinkedListNode{
    constructor(value){
         this.value = value;
         this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.size = 0;
        this.head = null;
    }
}

LinkedList.prototype.isEmpty = function(){
    return this.size == 0;
}

LinkedList.prototype.insert = function(val){
    let node = new LinkedListNode(val);
    if(this.head == null){
        this.head = node;
    }else{
        node.next = this.head;
        this.head = node;
    }
    this.size++;
}

LinkedList.prototype.get = function(index){
    if(this.size == 0 || this.size < index + 1){
        return -1;
    }
    let tempNode = this.head;
    for(let i = 1 ; i <= index; i++){
        tempNode = tempNode.next;
    }
    return tempNode;
}

LinkedList.prototype.delete = function(index){
    if(this.size == 0 || this.size < index + 1){
        throw new Error('Invalid index');
    }
    let tempNode = this.head;
    for(let i = 1 ; i <= index; i++){
        tempNode = tempNode.next;
    }
    tempNode.next = tempNode.next.next;
    this.size--;
}

let list1 = new LinkedList();
list1.insert(9);
list1.insert(8);
list1.insert(7);
list1.insert(6);
list1.insert(5);
list1.insert(4);
list1.get(3).value == 9;
list1.delete(4);

console.log(list1.size, list1.get(5))

