// Kata : Duplicate Encoder — 6kyu
// Objectif : convertir une chaîne de caractère en "(" si le caractère n'apparaît qu'une fois sinon ")" (insensible à la casse)


export default function duplicateEncode(word) {
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

// npm test
