// Kata : Array Exchange — 6kyu
// Objectif : The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed.

function exchangeWith(a, b) {
    const aTemp = [...a].reverse();
    const bTemp = [...b].reverse();

    a.length = 0;
    b.length = 0;

    a.push(...bTemp);
    b.push(...aTemp);
}

console.log("-------------");
const a = ["1", "2", "3", "4", "5", "6", "7"];
const b = ["a", "b", "c"];

exchangeWith(a, b);

console.log(a, ["c", "b", "a"]);
console.log(b, ["7", "6", "5", "4", "3", "2", "1"]);
console.log("-------------");