// Kata : Image host filename generator — 6kyu
// Objectif : Create a function for generating a random 6 character string which will be used to access the photo URL.

function generateName() {
    // make sure to check the name is unique via the photoManager object
    const min = "abcdefghijklmnopqrstuvwxyz";
    const maj = min.toUpperCase();
    const alph = min + maj;

    const allAlph = alph.split("");
    let random = "";

    for (let i = 0; i < 6; i++) {
        random += allAlph[Math.floor(Math.random() * 52)]
    }

    while (photoManager.nameExists(random)) {
        random = "";

        for (let i = 0; i < 6; i++) {
            random += allAlph[Math.floor(Math.random() * 52)]
        }
    }

    return random;
}

console.log("-------------");
const name = generateName();

console.log(typeof name, "string", "Name has to be a string.");
// console.log(photoManager.nameWasUnique(name), true, "Name has to be unique.");
console.log(name.length, 6, "Name has to be 6 digits long.");
console.log("-------------");