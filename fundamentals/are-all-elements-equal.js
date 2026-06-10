// Kata : Are all elements equal? — 6kyu
// Objectif : Create (a) method(s) eqAll that determines if all elements of a list are equal.
// list can be a String or an Array; return value is a Boolean

Object.defineProperty(String.prototype, "eqAll", {
    value: function eqAll() {
        const arr = this.split("");
        return arr.every(el => el === arr[0]);
    }
});

Object.defineProperty(Array.prototype, "eqAll", {
    value: function eqAll() {
        return this.every(el => el === this[0]);
    }
});




console.log("-------------");
console.log("aaaaa".eqAll()) // true
console.log("abcde".eqAll()) // false
console.log([0,0,0].eqAll()) // true
console.log([0,1,2].eqAll()) // false

console.log("".eqAll()) // true
console.log([].eqAll()) // true
console.log("-------------");