// Kata : Find the unique number — 6kyu
// Objectif : trouver le seul nombre qui est différent des autres

function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}


console.log("-------------");
console.log(findUniq([ 1, 0, 0 ])); // 1
console.log(findUniq([ 0, 1, 0 ])); // 1
console.log(findUniq([ 0, 0, 1 ])); // 1
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 3, 10, 3, 3, 3 ])); // 10
console.log("-------------");