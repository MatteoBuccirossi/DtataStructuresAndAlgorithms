const tree = require('./tree');

test('testing tree', ()=>{
    for(let i = 0; i < 50; i++){
        tree.insert(i);
    }
    tree.BFS();
});