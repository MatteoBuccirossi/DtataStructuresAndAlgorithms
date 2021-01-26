const tree = require('./tree');

test('testing tree', ()=>{
    let i = 3;
    tree.insert(i);
    expect(tree.findNode(i)).toBe(true);
    expect(tree.findNode(i +1)).toBe(false);
});