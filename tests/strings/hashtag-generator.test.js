import { describe, expect, test } from "@jest/globals";
import generateHashtag from "../../strings/hashtag-generator.js";

// Kata : The Hashtag Generator — 5kyu

describe("Cas valides", () => {
    test("une phrase renvoie un hashtag au début, sans espace et la première lettre de chaque mot en majuscule", () => {
        expect(generateHashtag("Do We have A Hashtag")).toBe("#DoWeHaveAHashtag")
    })
    test("doit pouvoir gérer un seul mot", () => {
        expect(generateHashtag("Codewars")).toBe("#Codewars")
    })
    test("doit supprimer les espaces", () => {
        expect(generateHashtag("Codewars Is Nice")).toBe("#CodewarsIsNice")
    })
    test("doit mettre la première lettre en majuscule", () => {
        expect(generateHashtag("Codewars is nice")).toBe("#CodewarsIsNice")
    })
    test("gère plusieurs espaces consécutifs entre deux mots", () => {
        expect(generateHashtag("code" + " ".repeat(140) + "wars")).toBe("#CodeWars")
    })
})

describe("Cas invalides", () => {
    test("input différent de string → lève une erreur", () => {
        expect(() => generateHashtag(2)).toThrow();
    });
    test("input null → lève une erreur", () => {
        expect(() => generateHashtag(null)).toThrow();
    })
    test("input undefined → lève une erreur", () => {
        expect(() => generateHashtag(undefined)).toThrow();
    })
})

describe("Cas limites", () => {
    test("une chaîne vide renvoie false", () => {
        expect(generateHashtag("")).toBe(false)
    })
    test("une chaîne avec des espaces est considérée comme vide et renvoie false", () => {
        expect(generateHashtag(" ".repeat(200))).toBe(false)
    })
    test("la chaine finale ne doit pas dépasser les 140 caractères : renvoie false", () => {
        expect(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")).toBe(false)
    })
    test("un hashtag final de exactement 140 caractères est accepté", () => {
        expect(generateHashtag("a".repeat(139))).toBe("#A" + "a".repeat(138))
    })
    test("un hashtag qui dépasserait 140 caractères est rejeté", () => {
        expect(generateHashtag("a".repeat(140))).toBe(false)
    })
    test("la chaine peut contenir des caractères spéciaux", () => {
        expect(generateHashtag("@#(^")).toBe("#@#(^")
    })
})
