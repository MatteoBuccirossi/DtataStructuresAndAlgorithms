class BinaryTreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this._root = null;
    }
}

BinaryTree.prototype.setRoot = function(node){
    this._root = node;
}

BinaryTree.prototype.init = function(value){
    this.setRoot(new BinaryTreeNode(value));
    function initHelper(node){
        node.left = new BinaryTreeNode(--value);
        node.right = new BinaryTreeNode(--value);
    }
    node = this._root;
    let level = 0;
    let currentLeft = null;
    let currentRight = null;
    while(value >= 0){
        initHelper(node);
        level++;
        currentLeft = node.left;
        currentRight = node.right;
        if(level%2 == 0){
            node = currentRight;
        }else{
            node = currentLeft;
        }
    }
}

BinaryTree.prototype.traversePreOrder = function(){
    traversePreOrderHelper(this._root);
    function traversePreOrderHelper(node){
        if(!node){
            return;
        }
        console.log(node.value);
        traversePreOrderHelper(node.left);
        traversePreOrderHelper(node.right);
    }
}

BinaryTree.prototype.traverseInOrder = function(){
    traverseInOrderHelper(this._root);
    function traverseInOrderHelper(node){
        if(!node){
            return;
        }
        traverseInOrderHelper(node.left);
        console.log(node.value);
        traverseInOrderHelper(node.right);
    }
}
BinaryTree.prototype.BFS = function(){
    let root = this._root;
    let queue = [];
    if(!node){
        return;
    }
    queue.push(root);
    while(queue.length > 0){
        for(let el of queue){
            queue.shift();
            console.log(el);
            if(el.left != null){
                queue.push(el.left);
            }
            if(el.right != null){
                queue.push(el.right);
            }
        }
    }
}
let tree = new BinaryTree();
tree.init(20);
tree.traversePreOrder();