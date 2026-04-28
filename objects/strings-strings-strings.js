// Kata : Strings, strings, strings (Hard) — 6kyu
// Objectif : You have to fix and improve upon the toString() method for arrays

Array.prototype.toString = function () {
    return `[${this.map(el => typeof el === "string" ? `'${el}'` : String(el)).join(",")}]`;
}


console.log("-------------");
console.log([].toString(), "[]", "Should be able to handle empty arrays");
console.log([[[[[[]]], []]]].toString(), "[[[[[[]]],[]]]]", "Should be able to handle empty nested arrays");
console.log([1.545, [2, 4, [23532], 55, 2.3, [15.22, 0.3, [], [[72, 3], 5]]]].toString(), "[1.545,[2,4,[23532],55,2.3,[15.22,0.3,[],[[72,3],5]]]]", "Should work with nested arrays");
console.log(["foobar", [["hello"]]].toString(), "['foobar',[['hello']]]", "Should enclose strings with single quotes");
console.log("-------------");
