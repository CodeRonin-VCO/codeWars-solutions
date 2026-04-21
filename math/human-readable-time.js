// Kata : Human Readable Time — 5kyu
// Objectif : Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)


function humanReadable(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    const pad = (n) => {
        return String(n).padStart(2, "0")
    };

    return `${pad(h)}:${pad(m)}:${pad(s)}`
}

console.log("-------------");
console.log(humanReadable(0)); // '00:00:00'
console.log(humanReadable(59)); // '00:00:59'
console.log(humanReadable(60)); // '00:01:00'
console.log(humanReadable(90)); // '00:01:30'
console.log(humanReadable(3599)); // '00:59:59'
console.log(humanReadable(3600)); // '01:00:00'
console.log(humanReadable(125220 )); // '34:47:00'
console.log(humanReadable(359999)); // '99:59:59'
console.log("-------------");
