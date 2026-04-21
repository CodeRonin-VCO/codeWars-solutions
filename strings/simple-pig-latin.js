// Kata : Simple Pig Latin — 5kyu
// Objectif : Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.


function pigIt(str) {
    return str.split(" ").map(word => word.slice(1) + word[0] + (/\W/.test(word) ? "" : "ay")).join(" ");
}

console.log("-------------");
console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !
console.log("-------------");
