// Kata : Get the Middle Character — 7kyu
// Objectif : retourner le caractère du milieu si la longueur de la chaine est impaire, sinon les deux caractères du milieu

function getMiddle(str) {
    return str.length % 2 === 0
        ? str
            .split("")
            .filter((l, i) => i === str.length / 2 - 1 || i === str.length / 2)
            .join("")
        : str
            .split("")
            .filter((l, i) => i === Math.floor(str.length / 2))
            .join("");
}


console.log("-------------");
console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"
console.log("-------------");