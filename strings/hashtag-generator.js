// Kata : The Hashtag Generator — 5kyu
// Objectif :
//      It must start with a hashtag (#).
//      All words must have their first letter capitalized, and remaining letters lowercased.
//      If the final result is longer than 140 chars it must return false.
//      If the input or the result is an empty string it must return false

function generateHashtag(str) {
    if (str.trim().length === 0) return false;

    const result = str
        .split(" ")
        .filter(word => word.length > 0)
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join("");

    return result.length >= 140 ? false : "#" + result;
}

console.log("-------------");
console.log(generateHashtag(""), false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200)), false, "Still an empty string")
console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
console.log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
console.log(generateHashtag("a".repeat(140)), false, "Too long")
console.log("-------------");