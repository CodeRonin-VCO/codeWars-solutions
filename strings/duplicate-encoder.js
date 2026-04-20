// Kata : Duplicate Encoder — 6kyu
// Objectif : convertir une chaîne de caractère en "(" si le caractère n'apparaît qu'une fois sinon ")" (insensible à la casse)


function duplicateEncode(word) {
    const letters = word.toLowerCase().split("");
    return letters
        .map(l => {
            if (letters.indexOf(l) === letters.lastIndexOf(l)) {
                return "("
            } else {
                return ")"
            }
        })
        .join("");
}

console.log("-------------");
console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())"
console.log("-------------");
