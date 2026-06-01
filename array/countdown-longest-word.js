// Kata : Countdown - Longest Word — 6kyu
// Objectif : Given an uppercase 9 letter string, letters, find the longest word that can be made with some or all of the letters.
// preloaded array words

const words = ['GAME', 'TOWER', 'TODAY', 'TRADE', 'WATER', 'BEAT', 'BITE', 'BYTE', 'LOOK', 'YOLK', 'CAGES', 'CAUSE', 'CAVES', 'DATES', 'GATES', 'GUEST', 'STAGE', 'USAGE', 'AGE', 'AX', 'EGG', 'EVE', 'EYE', 'GAGE', 'GUM', 'GUY', 'MAY', 'MUG'];

function longestWord(letters) {
    const countIn = (str, letter) => str.split("").filter(l => l === letter).length;
    
    const matchingWords = words
        .filter(word => word.split("").every(letter => countIn(word, letter) <= countIn(letters, letter)))
        .sort();

    const highestLength = matchingWords.map(word => word.length).sort((a, b) => b - a)[0];
    const result = matchingWords.filter((word, i) => highestLength === word.length);

    return result.length > 0 ? result : null;
}

console.log("-------------");
const exampleTestCases = {
    'GQEMAUVXY': ['GAME'],
    'TDWAYZROE': ['TODAY', 'TOWER', 'TRADE', 'WATER'],
    'EAEEAYITB': ['BEAT', 'BITE', 'BYTE'],
    'AKUIYOOLO': ['LOOK', 'YOLK'],
    'GVDTCAESU': ['CAGES', 'CAUSE', 'CAVES', 'DATES', 'GATES', 'GUEST', 'STAGE', 'USAGE']
}
for (const item in exampleTestCases) {
    console.log(longestWord(item), exampleTestCases[item])
}

console.log(longestWord(""), null)
console.log(longestWord("MKMKMKMKM"), null)
console.log(longestWord("IIIWUGEZI"), null)
console.log("-------------");