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



module.exports = new  BinarySearchTree();
