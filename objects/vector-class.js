// Kata : Vector class — 5kyu
// Objectif : Create a Vector object that supports addition, subtraction, dot products, and norms.

class Vector {
    constructor(components) {
        this.components = components;
    }
    add(v2) {
        if (this.components.length !== v2.components.length) throw new Error("");
        return new Vector(this.components.map((el, i) => el + v2.components[i]));
    }
    subtract(v2) {
        if (this.components.length !== v2.components.length) throw new Error("");
        return new Vector(this.components.map((el, i) => el - v2.components[i]));
    }
    dot(v2) {
        if (this.components.length !== v2.components.length) throw new Error("");
        return this.components.map((el, i) => el * v2.components[i]).reduce((acc, n) => acc + n, 0);
    }
    norm() {
        return Math.sqrt(this.components.map(el => el ** 2).reduce((acc, n) => acc + n, 0))
    }
    toString() {
        return `(${this.components.join(",")})`
    }
    equals(v2) {
        return this.components.every((el, i) => el === v2.components[i]) 
        && this.components.length === v2.components.length;
    }
}

console.log("-------------");
const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.add(b));      // should return a new Vector([4, 6, 8])
console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
console.log(a.dot(b));      // should return 1*3 + 2*4 + 3*5 = 26
console.log(a.norm());      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
console.log(a.add(c));      // throws an error
console.log("-------------");