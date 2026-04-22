// Kata : Convert string to camel case — 6kyu
// Objectif : convertir une chaîne de caractère en camelCase

function toCamelCase(str) {
    if (!str) return str;

    return str
        .split(/[-_]/)
        .map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join("");
}

console.log("-------------");
console.log(toCamelCase(''), '');
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior");
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior");
console.log(toCamelCase("A-B-C"), "ABC");
console.log("-------------");
