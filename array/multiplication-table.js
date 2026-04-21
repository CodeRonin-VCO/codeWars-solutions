// Kata : Multiplication table — 6kyu
// Objectif : create N×N multiplication table, of size provided in parameter.

function multiplicationTable(size) {
    const result = [];
    const range = [];

    for (let i = 1; i <= size; i++) {
        range.push(i);
    }

    for (let i = 1; i <= size; i++) {
        result.push(range.map(n => n * i))
    }

    
    return result;
}


console.log("-------------");
console.log(multiplicationTable(3)); // [[1,2,3],[2,4,6],[3,6,9]]
console.log("-------------");