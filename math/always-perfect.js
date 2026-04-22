// Kata : Always perfect — 7kyu
// Objectif : product of 4 consecutive numbers + 1 is always a perfect square — return both

function checkRoot(string) {
    const numbers = string.split(",").map(el => Number(el));
    if (numbers.length !== 4) return "incorrect input";
    if (numbers.some(el => isNaN(el))) return "incorrect input";
    if (!numbers.every((el, i) => i === 0 || el === numbers[i - 1] + 1)) return "not consecutive";

    const mult = numbers.reduce((acc, n) => acc * n, 1) + 1;
    const squareR = Math.round(Math.sqrt(mult));

    return `${mult}, ${squareR}`;
}

console.log("-------------");
console.log(checkRoot('4,5,6,7'), '841, 29');
console.log(checkRoot('3,s,5,6'), 'incorrect input');
console.log(checkRoot('11,13,14,15'), 'not consecutive');
console.log("-------------");