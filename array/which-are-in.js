// Kata : Which are in? — 6kyu
// Objectif : retourner les éléments de a1 qui sont des sous-chaînes d'au moins un élément de a2, triés par ordre lexicographique

function inArray(array1, array2) {
    return array1
        .filter(el => array2.some(item => item.includes(el)))
        .sort();
}



console.log("-------------");
let a1 = ["xyz", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(a1, a2)); // ["live", "strong"]
a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2)); // ["arp", "live", "strong"]
a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2)); // []

console.log("-------------");