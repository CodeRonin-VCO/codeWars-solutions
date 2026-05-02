// Kata : Title Case — 6kyu
// Objectif : A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

function titleCase(title, minorWords) {
    if (title.length === 0) return "";
    const words = title.toLowerCase().split(" ");

    return words.map((word, i) => {
        if (minorWords) {
            const minorWordsArray = minorWords.toLowerCase().split(" ");
            return (i > 0  && minorWordsArray.includes(word)) ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
    }).join(" ");
}

console.log("-------------");
console.log(titleCase('a clash of KINGS', 'a an the of')); // 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // 'The Wind in the Willows'
console.log(titleCase('the quick brown fox', "xyz fox quick the")); // 'The quick Brown fox'
console.log(titleCase('', '')); // ''
console.log("-------------");