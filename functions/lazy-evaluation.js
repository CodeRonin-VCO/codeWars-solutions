// Kata : Compose functions (T Combinator) — 5kyu
// Objectif : Let's make a function called compose that accepts a value as a parameter, as well as any number of functions as additional parameters.

class Lazy {
    constructor() {
        this.arguments = [];

    }
    add(fn, ...args) {
        this.arguments.push({ fn: fn, args: args });
        return this;
    }
    invoke(target) {
        return this.arguments.reduce((acc, el) => el.fn(...el.args, ...acc), target);
    }
}


console.log("-------------");
function max() {
    return Math.max.apply(null, arguments);
}
function filterNumbers() {
    return Array.prototype.filter.call(arguments, function (value) {
        return isNumeric(value);
    });
}
function isNumeric(n) {
    return !isNaN(n) && Number(n) === n;
}
function filterRange(min, max) {
    var args = Array.prototype.slice.call(arguments, 2);
    return Array.prototype.filter.call(args, function (value) {
        return min <= value && value <= max;
    });
}
console.log("--- add seul ---");
console.log(new Lazy().add(filterNumbers));
console.log(new Lazy().add(filterRange, 2, 7));
console.log("--- invoke étape 1 : filterNumbers ---");
console.log(new Lazy().add(filterNumbers).invoke([1, 8, 6, [], "7", -1, { v: 5 }, 4]));
// attendu : [1, 8, 6, -1, 4]

console.log("--- invoke étape 2 : filterNumbers + filterRange ---");
console.log(new Lazy().add(filterNumbers).add(filterRange, 2, 7).invoke([1, 8, 6, [], "7", -1, { v: 5 }, 4]));
// attendu : [6, 4]

console.log("--- invoke complet ---");
console.log(new Lazy().add(filterNumbers).add(filterRange, 2, 7).add(max).invoke([1, 8, 6, [], "7", -1, { v: 5 }, 4]));
// attendu : 6
console.log("-------------");