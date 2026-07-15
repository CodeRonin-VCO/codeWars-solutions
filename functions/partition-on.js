// Kata : Partition On — 5kyu
// Objectif : Write a function which partitions a list of items based on a given predicate.

function partitionOn(pred, items) {
    const T = items.filter(pred);
    const F = items.filter(el => !pred(el));

    items.splice(0, items.length, ...F, ...T);

    return F.length;
}

console.log("-------------");
let items = [1, 2, 3, 4, 5, 6];
function isEven(n) { return n % 2 == 0 }
let i = partitionOn(isEven, items);
console.log(i, 3, 'partioned at 3');
console.log(items.slice(0, i), [1, 3, 5]);
console.log(items.slice(i), [2, 4, 6]);
console.log("-------------");