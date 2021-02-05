class TrieNode{
    constructor(){
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }
}

Trie.prototype.insert = function(word){
    let current = this.root;
    for(let letter of word){
        let node = current.children[letter];
        if(!node){
            node = new TrieNode();
            current.children[letter] = node;
        }
        current = node;
    }
    current.endOfWord = true;
}

Trie.prototype.search = function(word){
    let current = this.root;
    for(let letter of word){
        let node = current.children[letter];
        if(!node){
            return false;
        }
        current = node;
    }
    return current.endOfWord;
}

Trie.prototype.delete = function(word){
    this.deleteHelper(this.root, word, 0);
}

Trie.prototype.deleteHelper = function(current, word, index){
    if(index == word.length){
        if(!current.endOfWord){
            return false;
        }
        current.endOfWord = false;
        return Object.keys(current.children).length == 0;
    }

    let char = word.charAt(index);
    let node = current.children[char];
    if(!node){
        return false;
    }
    let bool = this.deleteHelper(node, word, index + 1);
    if(bool){
        delete current.children[char];
        return Object.keys(current.children).length == 0;
    }
    return false;
}
let trie = new Trie();
trie.insert('casbah');
trie.insert('london');
trie.insert('minaret');
trie.delete('minaret');
console.log(trie.search('minaret'), trie.search('casbah'));
