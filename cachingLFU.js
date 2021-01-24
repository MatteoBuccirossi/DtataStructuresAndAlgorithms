class LFUNode{
    constructor(key, value){
        this.key = key;
        this.data = value;
        this.prev = null;
        this.next = null;
        this.freqCounter = 1;
    }
}

class LFUDoublyLinkedList{
    constructor(){
        this.head = new LFUNode('buffer head', null);
        this.tail = new LFUNode('buffer tail', null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }
}

class LFUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.keys = {};
        this.freq = {};
        this.minFreq = 0;
        this.size = 0;
    }
}

//LFU double linked list
LFUDoublyLinkedList.prototype.isEmpty = function(){
    return this.size == 0;
}

LFUDoublyLinkedList.prototype.print = function(){
    let node = this.head;
    while(node){
        console.log(node.data);
        node = node.next;
    }
}

LFUDoublyLinkedList.prototype.insertAtHead = function(node){
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.size++;
}

LFUDoublyLinkedList.prototype.insertAtTail = function(node){
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
    node.prev = this.tail;
    this.size++;
}

LFUDoublyLinkedList.prototype.removeAtTail = function(){
    let oldTail = this.tail.prev;
    let prev = this.tail.prev;
    prev.prev.next = this.tail;
    this.tail.next = prev;
    this.size--;
    return oldTail;
}

LFUDoublyLinkedList.prototype.removeNode = function(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
}

LFUCache.prototype.set = function(key, value){
    let node = this.keys[key];
    if(node == undefined){
        //if node dosen't exist
        node = new LFUNode(key, value);
        this.keys[key] = node;
        if(this.size != this.capacity){
            //create freq1 doubly linked list
            if(this.freq[1] === undefined){
                this.freq[1] = new LFUDoublyLinkedList();
            }
            this.freq[1].insertAtHead(node);
            this.size++;
        }else{
            let oldTail = this.freq[this.minFreq].removeAtTail();
            delete this.keys[oldTail.key];
            if(this.freq[1] === undefined){
                this.freq[1] = new LFUDoublyLinkedList();
            }
            this.freq[1].insert(node);
        }
        this.minFreq = 1;

    }else{
        //if node exists
        let oldCounter = node.freqCounter;
        node.data = value;
        node.freqCounter++;

        this.freq[oldCounter].removeNode(node);

        if(this.freq[node.freqCounter] === undefined){
            this.freq[node.freqCounter] = new LFUDoublyLinkedList();
        }

        this.freqCounter[node.freqCounter].insertAtHead(node);

        if(oldCounter == this.minFreq && Object.keys(this.freq[oldCounter]).size == 0){
            this.minFreq++
        }
    }
}

LFUCache.prototype.get = function(key){
    let node = this.keys[node];
    if(node == undefined){
        return null;
    }else{
        let oldCounter = node.freqCounter;
        node.freqCounter++;

        this.freq[oldCounter].removeNode(node);
        if(this.freq[node.freqCounter] === undefined){
            this.freq[node.freqCounter] = new LFUDoublyLinkedList();
        }

        this.freqCounter[node.freqCounter].insertAtHead(node);
        if(oldCounter == this.minFreq && Object.keys(this.freq[oldCounter]).size == 0){
            this.minFreq++
        }
        return node.data;
    }
}



let list1 = new LFUDoublyLinkedList();
list1.insertAtHead(new LFUNode('ddd', 888));
list1.insertAtHead(new LFUNode('ddd', 858));
list1.insertAtTail(new LFUNode('ddd', 565574));
list1.insertAtHead(new LFUNode('ddd', 889));



list1.print();