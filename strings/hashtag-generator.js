// Kata : The Hashtag Generator — 5kyu
// Objectif :
//      It must start with a hashtag (#).
//      All words must have their first letter capitalized, and remaining letters lowercased.
//      If the final result is longer than 140 chars it must return false.
//      If the input or the result is an empty string it must return false

export default function generateHashtag(str) {
    if (str.trim().length === 0) return false;

    const result = str
        .split(" ")
        .filter(word => word.length > 0)
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join("");

    return result.length >= 140 ? false : "#" + result;
}

// npm test