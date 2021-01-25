class DLLNode{
    constructor(key, value){
        this.data = value;
        this.key = key;
        this.prev = null;
        this.next = null;
    }
}


class LRUDoublyLinkedList{
    constructor(){
        this.head = new LFUNode('buffer head', null);
        this.tail = new LFUNode('buffer tail', null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }
}
//LFU double linked list
LRUDoublyLinkedList.prototype.isEmpty = function(){
    return this.size == 0;
}

LRUDoublyLinkedList.prototype.print = function(){
    let node = this.head;
    while(node){
        console.log(node.data);
        node = node.next;
    }
}

LRUDoublyLinkedList.prototype.insertAtHead = function(node){
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.size++;
}

LRUDoublyLinkedList.prototype.insertAtTail = function(node){
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
    node.prev = this.tail;
    this.size++;
}

LRUDoublyLinkedList.prototype.removeAtTail = function(){
    let oldTail = this.tail.prev;
    let prev = this.tail.prev;
    prev.prev.next = this.tail;
    this.tail.next = prev;
    this.size--;
    return oldTail;
}

LRUDoublyLinkedList.prototype.removeNode = function(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
}

class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.keys = {};
        this.head = new DLLNode('', null);
        this.tail = new DLLNode('', null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
}

LRUCache.prototype.removeNode = function(node){
    let prev = node.prev;
    let next = node.next;
    next.prev = prev;
    prev.next = next;
}

LRUCache.prototype.addNode = function(node){
    let realTail = this.tail.prev;
    realTail.next= node;
    this.tail.prev = node;
    node.prev = realTail;
    node.next = this.tail;
}

LRUCache.prototype.print = function(){
    let node = this.head;
    while(node){
        console.log(node.data);
        node = node.next;
    }
}

LRUCache.prototype.get = function(key){
    let node = this.keys[key];

    if(node == undefined){
        return null;
    }else{
        this.removeNode(node);
        this.addNode(node);
        return node.data
    }
}


LRUCache.prototype.set = function(key, value){
    let node = this.keys[key];
    if(node){
        this.removeNode(node);
    }
    let newNode = new DLLNode(key, value);
    this.addNode(newNode);
    this.keys[key] = newNode;

    if(Object.keys(this.keys).length > this.capacity){
        let realHead = this.head.next;
        this.removeNode(realHead);
        delete this.keys[realHead.key];
    }
}

let list = new LRUCache(50);


let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


console.log(alphabet);

for(let i = 0; i < 30; i++){
    let code = '';
    for(let j = 0; j < 6; j++){
        code = code + alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    list.set(`${i}`, Math.pow(i, 2));
}


console.log(list.get('8'));




