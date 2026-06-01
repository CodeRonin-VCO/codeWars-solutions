// Kata : Find the Mine! — 6kyu
// Objectif : Write a function that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. 
// Areas in the 2D array that are not the mine will be represented as 0s.

function mineLocation(field) {
    let row = field.findIndex(r => r.includes(1));
    let col = field[row].findIndex(c => c === 1);

    return [row, col];
}

console.log("-------------");
console.log(mineLocation([[1, 0, 0], [0, 0, 0], [0, 0, 0]])); // [0,0]
console.log(mineLocation([[0, 0, 0], [0, 1, 0], [0, 0, 0]])); // [1,1]
console.log(mineLocation([[0, 0, 0], [0, 0, 0], [0, 1, 0]])); // [2,1]
console.log("-------------");