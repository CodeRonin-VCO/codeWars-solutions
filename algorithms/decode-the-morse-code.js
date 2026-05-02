// Kata : Decode the Morse code  — 6kyu
// Objectif : find if the number is a narcissistic number
// 153 (3 digits), which is narcissistic → 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

const MORSE_CODE = {
    ".-": "A", "-...": "B", "-.-.": "C", "-..": "D",
    ".": "E", "..-.": "F", "--.": "G", "....": "H",
    "..": "I", ".---": "J", "-.-": "K", ".-..": "L",
    "--": "M", "-.": "N", "---": "O", ".--.": "P",
    "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
    "..-": "U", "...-": "V", ".--": "W", "-..-": "X",
    "-.--": "Y", "--..": "Z",

    "-----": "0", ".----": "1", "..---": "2", "...--": "3",
    "....-": "4", ".....": "5", "-....": "6", "--...": "7",
    "---..": "8", "----.": "9"
};

const decodeMorse = function (morseCode) {
    return morseCode
        .trim()
        .split("   ")  // words
        .map(word => word
            .split(" ") // letters
            .map(letter => MORSE_CODE[letter])
            .join(""))
        .join(" ");
}


console.log("-------------");
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
console.log(decodeMorse('   .... . -.--   '), 'HEY');
console.log(decodeMorse("   .   . "), 'E E');
console.log("-------------");