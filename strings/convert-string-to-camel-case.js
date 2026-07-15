// Kata : Convert string to camel case — 6kyu
// Objectif : convertir une chaîne de caractère en camelCase

export default function toCamelCase(str) {
    if (!str) return str;

    return str
        .split(/[-_]/)
        .map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join("");
}

// npm test 
