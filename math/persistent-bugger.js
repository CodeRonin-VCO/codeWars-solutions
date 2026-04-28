// Kata : Persistent Bugger. — 6kyu
// Objectif : Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num, count = 0) {
    const str = `${num}`;

    if (str.length === 1) return count;

    const res = str.split("").map(n => +n).reduce((acc, n) => acc * n, 1);
    
    return persistence(res, count + 1);
}

console.log("-------------");
console.log(persistence(39), `\nSolution: `, 3);
console.log(persistence(4), `\nSolution: `, 0);
console.log(persistence(25), `\nSolution: `, 2);
console.log(persistence(999), `\nSolution: `, 4);
console.log("-------------");