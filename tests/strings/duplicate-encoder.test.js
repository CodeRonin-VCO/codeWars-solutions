import { describe, expect, test } from "@jest/globals";
import duplicateEncode from "../../strings/duplicate-encoder.js";

// Kata : Duplicate Encoder — 6kyu
describe("Cas valides", () => {
    test("retourne uniquement des ( quand aucune lettre n'est dupliquée", () => {
        expect(duplicateEncode("din")).toBe("(((");
    })
    test("mélange de caractères uniques et dupliqués: recede", () => {
        expect(duplicateEncode("recede")).toBe("()()()");
    })
    test("plusieurs caractères différents sont dupliqués: success", () => {
        expect(duplicateEncode("success")).toBe(")())())");
    })
    test("insensible à la casse: suCceSs", () => {
        expect(duplicateEncode("suCceSs")).toBe(")())())");
    })
});

describe("Cas invalides", () => {
    test("input différent de string → lève une erreur", () => {
        expect(() => duplicateEncode(2)).toThrow();
    });
    test("input null → lève une erreur", () => {
        expect(() => duplicateEncode(null)).toThrow();
    })
    test("input undefined → lève une erreur", () => {
        expect(() => duplicateEncode(undefined)).toThrow();
    })
});

describe("Cas limites", () => {
    test("chaîne vide passée à la fonction", () => {
        expect(duplicateEncode("")).toBe("");
    })
    test("chaîne d'un caractère", () => {
        expect(duplicateEncode("a")).toBe("(")
    })
    test("chaîne contenant des espaces", () => {
        expect(duplicateEncode("a   b")).toBe("()))(")
    })
    test("chaîne contenant des caractères spéciaux", () => {
        expect(duplicateEncode("(( @")).toBe("))((")
    })
});


