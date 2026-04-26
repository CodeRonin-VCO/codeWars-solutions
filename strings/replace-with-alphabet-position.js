// Kata : Replace With Alphabet Position — 6kyu
// Objectif : In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

// Version 1 : sans regex
function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return text
        .split("")
        .map(el => {
            if (el.toLowerCase() !== el.toUpperCase()) {
                return alphabet.indexOf(el.toLowerCase()) + 1;
            } else {
                return " "
            }
        })
        .filter(el => el !== " ")
        .join(" ")
}

// Version 2 : avec regex
function alphabetPositionWithRegex(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return text.toLowerCase().match(/[a-z]/g)?.map(el => alphabet.indexOf(el) + 1).join(" ") ?? "";
}


console.log("-------------");
console.log(alphabetPosition("The sunset sets at twelve o' clock."), "Sol : 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."), "Sol: 20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
console.log("-------------");
console.log(alphabetPositionWithRegex("The sunset sets at twelve o' clock."), "Sol : 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPositionWithRegex("The narwhal bacons at midnight."), "Sol: 20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
console.log("-------------");