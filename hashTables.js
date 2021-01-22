class HashTable{
    constructor(size){
        this.size = size;
        this.keys= this.initArray(size);
        this.values = this.initArray(size);
        this.limit = 0;
    }
}

HashTable.prototype.put = function(key, value){
    if(this.limit >= this.size){
        throw new Error('Hash table is full');
    }
    let hashedIndex = this.hash(key);

    while(this.keys[hashedIndex] != null){
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }

    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
    console.log(this.keys);
}

HashTable.prototype.get = function(key){
    var hashedIndex = this.hash(key);
    while(this.keys[hashedIndex] != key ){
        hashedIndex++;
        hashedIndex = hashedIndex % this.size
    }
    return this.values[hashedIndex]
}

HashTable.prototype.hash = function(key){
    if(!Number.isInteger(key)){
        throw new Error('Key must be integer');
    }
    return key % this.size;
}

HashTable.prototype.initArray = function(size){
    let array = [];
    for(let i = 0; i < size; i++){
        array.push(null);
    }
    return array;
}

let exampleTable = new HashTable(7);

class HashTableQuadratic extends HashTable{
    put(key, value){
        if(this.limit >= this.size){
            throw new Error('Table length exceeded');
        } 

        let hashedIndex = this.hash(key);
        //console.log(hashedIndex);
        let squaredIndex = 1;
        while(this.keys[hashedIndex] != null){
            hashedIndex += Math.pow(squaredIndex, 2);
            squaredIndex++;
        }
        this.keys[hashedIndex] = key;
        this.values[hashedIndex] = value;
        this.limit++;
        //console.log(this.keys, this.values);
    }

    get(key){
        console.log(this.keys, this.values);
        let hashedIndex = this.hash(key);
        let squaredIndex = 1;
        while(this.keys[hashedIndex] != key){
            hashedIndex += Math.pow(squaredIndex, 2);

            squaredIndex++;
        }
        return this.values[hashedIndex];
    }
}

class HashTableDouble extends HashTable{
    hash(key){
        if(!Number.isInteger(key)){
            throw new Error('Key must be int');
        }
        return this.doubleHash(key % this.size);
    }

    doubleHash(key){
        let R = this.size -2;
        return R - (key % R);
    }
}

let ex3 = new HashTableDouble(13);

ex3.put(1, "hola homie");
ex3.put(14, "hola homie");
ex3.put(27, "hola homie");
ex3.put(30, "hola homie");



console.log(ex3.get(45));