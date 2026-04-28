// Kata : Custom Setters and Getters — 6kyu
// Objectif : create a log for each temperature entry.

class Archiver {
    #temperature;

    constructor() {
        this.logs = [];
        this.#temperature = 0;
    }

    set temperature(temperature) {
        this.#temperature = temperature;
        this.logs.push({
            date: new Date(),
            val: temperature
        });
    }

    get temperature() {
        return this.#temperature;
    }

    getArchive() {
        return this.logs;
    }
}


console.log("-------------");
const archiver = new Archiver;
const TIMESTAMP = Date.now();
const VALUES = [33, 28, 21, 20, 18, 30];
for (let i = 0; i < 3; i++) {
    archiver.temperature = VALUES[i];
    console.log(archiver.temperature, VALUES[i]);
}

const temperatures1 = archiver.getArchive();
console.log(temperatures1);
console.log(temperatures1.length, 3);
console.log("-------------");