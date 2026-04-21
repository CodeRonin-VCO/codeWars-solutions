// Kata : Custom each() Array method — 6kyu
// Objectif : créer une méthode custom each() sur les tableaux qui s'arrête de boucler lorsque callback === true;

Array.prototype.each = function (fn) {
    const array = this;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        const callback = fn(element, i);

        if (callback) return;
    }
}


console.log("-------------");
let letters = ['a', 'b', 'c', 'd', 'e']
let allowedLetters = []
letters.each(function (letter, index) {
    // break out of the loop if we reached a letter with the value 'd'
    if (letter == 'd') {
        return true;
    }
    allowedLetters.push(letter);
})

console.log(allowedLetters); // ['a', 'b', 'c']
console.log("-------------");