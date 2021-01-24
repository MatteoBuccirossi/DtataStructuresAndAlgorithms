class DoubleLinkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

DoubleLinkedList.prototype.isEmpty= function(){
    return this.size == 0;
}

DoubleLinkedList.prototype.addFront = function(value){
    if(this.head == null){
        this.head = new DoubleLinkedListNode(value);
        this.tail = this.head;
    }else{
        let temp = new DoubleLinkedListNode(value);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }
    this.size++;
}

DoubleLinkedList.prototype.addTail = function(value){
    if(this.tail == null){
        this.tail = new DoubleLinkedListNode(value);
        this.head.tail;
    }else{
        let temp = new DoubleLinkedListNode(value);
        temp.prev = this.tail;
        this.tail.next = temp;
        this.tail = temp;
    }
    this.size++;
}

DoubleLinkedList.prototype.deleteAtHead = function(){
    if(this.head.next == null){
        this.head = null;
        this.tail = null;
        
    }else{
        this.head.next.prev == null;
        this.head = this.head.next;
    }
    this.size--;
}

DoubleLinkedList.prototype.deleteAtTail = function(){
    if(this.tail.prev == null){
        this.head = null;
        this.tail = null;
        
    }else{
        this.tail.prev.next== null;
        this.tail = this.tail.prev;
    }
    this.size--;
}

DoubleLinkedList.prototype.search = function(value){
    let node = this.head;
    for(let i =0; i < this.size; i++){
        if(node.data == value){
            return true;
        }
        node = node.next;
    }
    return false;
}

function print(list){
    let node = list.head;
    for(let i =0; i < list.size; i++){
       console.log(node.data);
       node = node.next;
    }

}

function reverse(list){
    let node = list.head;
    for(let i = 0; i< list.size; i++){
        let temp = node.next;
        [node.prev, node.next] = [node.next, node.prev];
        node = temp;
    }
    [list.head, list.tail] = [list.tail, list.head];
}

let sll1 = new DoubleLinkedList();
sll1.addFront(8);
sll1.addFront(5);
sll1.addFront(6);
sll1.addFront(7);
print(sll1);
reverse(sll1);
console.log('');
console.log('');
console.log('');
console.log('');

print(sll1);





