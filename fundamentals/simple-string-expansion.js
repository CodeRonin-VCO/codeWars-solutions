// Kata : Simple Simple Simple String Expansion — 6kyu
// Objectif : Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of that string

function stringExpansion(s) {
    let factor = 1;
    let result = "";

    for (let char of s) {
        if (/[0-9]/.test(char)) {
            factor = Number(char);
        } else {
            result += char.repeat(factor);
        }
    }

    return result;
}




console.log("-------------");
console.log(stringExpansion('3abc'), 'Solution: aaabbbccc');
console.log(stringExpansion('3D2a5d2f'), 'Solution: DDDaadddddff');
console.log(stringExpansion('0d0a0v0t0y'), '');
console.log(stringExpansion('3d332f2a'), 'Solution: dddffaa');
console.log(stringExpansion('abcde'), 'Solution: abcde');
console.log(stringExpansion('a2bcde'), 'Solution: abbccddee');
console.log("-------------");