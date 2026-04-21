// Kata : Mean Square Error — 5kyu
// Objectif : reçoit deux tableaux
// 1) Calculer la différence des valeurs qui ont le même index dans chaque tableau
// 2) Valeurs absolues de la diff
// 3) Mettre au carré
// 4) Moyenne des carrés

const solution = function(firstArray, secondArray) {
    return firstArray
        .map((n, i) => (n - secondArray[i]) ** 2)
        .reduce((acc, n) => (acc + n), 0)
        / firstArray.length;
}


console.log("-------------");
console.log(solution([1, 2, 3], [4, 5, 6])); // 9
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])); // 16.5
console.log(solution([-1, 0], [0, -1])); // 1
console.log("-------------");