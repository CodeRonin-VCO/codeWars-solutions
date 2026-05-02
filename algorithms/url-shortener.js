// Kata : URL shortener — 5kyu
// Objectif : Write a class with two methods, shorten and redirect url

// sort.ly/short
// short : lowerCase letters, one dot, one slash, max length of 13

class UrlShortener {
    constructor() {
        this.dbShort = new Map();
        this.dbLong = new Map();
        this.counter = 0;
    }

    shorten(longURL) {
        if (this.dbLong.has(longURL)) return this.dbLong.get(longURL);

        const shortURL = `short.ly/${this.#generateRandomCode()}`;
        this.dbShort.set(shortURL, longURL);
        this.dbLong.set(longURL, shortURL);

        return shortURL;
    }

    redirect(shortURL) {
        return this.dbShort.get(shortURL);
    }

    #generateRandomCode() {
        let n = this.counter++;
        let result = "";

        for (let i = 0; i < 4; i++) {
            result += "abcdefghijklmnopqrstuvwxyz"[n % 26];
            n = Math.floor(n / 26);
            if (n === 0) break;
        }

        return result;
    }
}

console.log("-------------");

console.log("-------------");