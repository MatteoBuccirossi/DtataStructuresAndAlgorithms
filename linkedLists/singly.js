function SinglyLinkedListNode(data) {
    this.data = data;
    this.next = null;
}

function SinglyLinkedList() {
    this.head = null;
    this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function() {
    return this.size == 0;
}

SinglyLinkedList.prototype.insert = function(value) {
    if (this.head === null) { //If first node
        this.head = new SinglyLinkedListNode(value);
    } else {
        var temp = this.head;
        this.head = new SinglyLinkedListNode(value);
        this.head.next = temp;
    }
    this.size++;
}
var sll1 = new SinglyLinkedList();
sll1.insert(1); // linked list is now: 1 -> null
sll1.insert(12); // linked list is now: 12 -> 1 -> null
sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null



SinglyLinkedList.prototype.remove = function(value) {
    var currentHead = this.head;
    if (currentHead.data == value) {
        // just shift the head over. Head is now this new value
        this.head = currentHead.next;
        this.size--;
    } else {
        var prev = currentHead;
        while (currentHead.next) {
            if (currentHead.data == value) {
                // remove by skipping
                prev.next = currentHead.next;
                prev = currentHead;
                currentHead = currentHead.next;
                break; // break out of the loop
            }
            prev = currentHead;
            currentHead = currentHead.next;
        }
        //if wasn't found in the middle or head, must be tail
        if (currentHead.data == value) {
            prev.next = null;
        }
        this.size--;
    }
}
function print(list){
    let node = list.head;
    for(let i =0; i < list.size; i++){
       console.log(node.data);
       node = node.next;
    }

}

function removeDuplicate(list){
    let node = list.head;
    let values = {};
    for(let i= 0; i < list.size;i++){
        let temp = node.next;
        if(node){
            if(values[node.data]){
                list.remove(node.data);
            }else{
                values[node.data] = 1;
            }
        }
        node = temp;
    }
}

function reverse(sll) {
    var node = sll.head;
    var prev = null;
    while (node) {
        var temp = node.next;
        node.next = prev;
        prev = node;
        if (!temp){
            sll.head = node;
            break;
        }
        node = temp;
    }
    return node;
}

var sll1 = new SinglyLinkedList();
sll1.insert(8); // linked list is now:  1 -> null
sll1.insert(5); // linked list is now: 12 -> 1 -> null
sll1.insert(6); 
sll1.insert(8); // linked list is now:  1 -> null
sll1.insert(9); // linked list is now: 12 -> 1 -> null
sll1.insert(9);
sll1.insert(8); // linked list is now:  1 -> null
sll1.insert(5); // linked list is now: 12 -> 1 -> null
sll1.insert(7);// linked list is now: 20 -> 12 -> 1 -> null // linked list is now: 20 -> 1 -> null
print(sll1);
removeDuplicate(sll1);
console.log('');
console.log('');

print(sll1);

