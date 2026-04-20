// Kata : Moving Zeros To The End — 5kyu
// Objectif : écrire un algorithme qui déplace les zéros la fin d'un tableau, préservant l'ordre des autres éléments

function moveZeros(arr) {
    const nonZeros = arr.filter(el => el !== 0);
    const zeros = arr.filter(el => el === 0);

    return [...nonZeros, ...zeros];
}

console.log("-------------");
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log("-------------");
