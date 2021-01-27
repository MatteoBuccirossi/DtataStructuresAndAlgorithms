class TreeNode{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
}

BinarySearchTree.prototype.insert = function(value){
    let newNode = new TreeNode(value);
    if(!this.root){
        this.root = newNode;
    }else{
        let currentNode = this.root;
        while(true){
            if(currentNode.value > value){
                if(currentNode.left){
                    currentNode = currentNode.left;
                }else{
                    currentNode.left = newNode;
                    break;
                }
            }else if(currentNode.value < value){
                if(currentNode.right){
                    currentNode = currentNode.right;
                }else{
                    currentNode.right = newNode;
                    break;
                }
            }else{
                break;
            }
        }
    }
}

BinarySearchTree.prototype.remove = function(value){
    return deleteHelper(this.root, value);
    function deleteHelper(root, value){
        if(!root){
            return null;
        }else if(value < root.value){
            root.left = deleteHelper(root.left, value);
        }else if(value > root.value){
            root.right = deleteHelper(root.right, value);
        }else{
            if(!root.left && !root.right){
                return null;
            }else if(!root.left){
                root = root.right;
                return root;
            }else if(!root.left){
                root = root.leftt;
                return root;
            }else{
                let temp = findMin(root.right);
                root.value = temp.value;
                root.right = deleteHelper(root.right, temp.value);
                return root;
            }
    }
  }
    function findMin(root){
        while(root.left){
            root = root.left;
        }
        return root;
    }
}
BinarySearchTree.prototype.BFS = function(){
    let root = this.root;
    let queue = [];
    if(!root){
        return;
    }
    queue.push(root);
    while(queue.length > 0){
        for(let el of queue){
            queue.shift();
            console.log(el.value);
            if(el.left != null){
                queue.push(el.left);
            }
            if(el.right != null){
                queue.push(el.right);
            }
        }
    }
}
BinarySearchTree.prototype.findNode = function(value){
    let root = this.root;
    while(root){
        if(value > root.value){
            root = root.right;
        }else if(value < root.value){
            root = root.left;
        }else{
            return true;
        }
    }
    return false;
}

BinarySearchTree.prototype.traversePreOrder = function(){
    traversePreOrderHelper(this.root);
    function traversePreOrderHelper(node){
        if(!node){
            return;
        }
        console.log(node.value);
        traversePreOrderHelper(node.left);
        traversePreOrderHelper(node.right);
    }
}

BinarySearchTree.prototype.invert = function(){
    let root = this.root;
    let nodes = [];
    if(!root){
        return;
    }
    nodes.push(root);
    while(nodes.length > 0){
        for(let node of nodes){
            nodes.shift();
            [node.left, node.right] = [node.right, node.left];
            if(node.left != null){
                nodes.push(node.left);
            }
            if(node.right != null){
                nodes.push(node.right);
            }
        }
    }
}

Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };

let tree = new BinarySearchTree();
let nums = [
   7, 10, 20, 15, 16, 6, 14,
  12,  2,  1,  9, 11, 3,  8,
  19, 17,  5, 13, 18, 4
];

for(let el of nums){
    tree.insert(el);
}
tree.BFS();
tree.traversePreOrder();
tree.invert();
console.log('');
console.log('');
console.log('');
tree.traversePreOrder();
module.exports = new  BinarySearchTree();

class AvlTree{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
        this.depth = 1;
    }
}

AvlTree.prototype.setDepthBasedOnChildren = function(){
    if(this.node == null){
        this.depth = 0;
    }else{
        this.depth = 1;
    }

    if(this.left != null){
        this.depth = this.left.depth +1;
    }
}