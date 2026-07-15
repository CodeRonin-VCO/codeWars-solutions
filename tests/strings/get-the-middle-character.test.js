import { describe, expect, test } from "@jest/globals";
import getMiddle from "../../strings/get-the-middle-character.js";

// Kata : Get the Middle Character — 7kyu

describe("cas valides", () => {
    test("nombre pair de lettre renvoie les deux lettres du milieu", () => {
        expect(getMiddle("test")).toBe("es");
    })
    test("nombre impair de lettre renvoie la lettre du milieu", () => {
        expect(getMiddle("testing")).toBe("t");
    })
    test("lettre unique renvoie la lettre", () => {
        expect(getMiddle("A")).toBe("A");
    })
    test("random test", () => {
        expect(getMiddle("zgbpveahxuhaeqop")).toBe("hx");
    })
})

describe("Cas invalides", () => {
    test("input différent de string renvoie une erreur", () => {
        expect(() => getMiddle(2)).toThrow();
    })
    test("input null → lève une erreur", () => {
        expect(() => getMiddle(null)).toThrow();
    })
    test("input undefined → lève une erreur", () => {
        expect(() => getMiddle(undefined)).toThrow();
    })
})

describe("Cas limites", () => {
    test("la chaine contient des espaces", () => {
        expect(getMiddle("Hel  lo")).toBe(" ");
    })
    test("la chaine contient des caractères spéciaux", () => {
        expect(getMiddle("#@{")).toBe("@");
    })
})

