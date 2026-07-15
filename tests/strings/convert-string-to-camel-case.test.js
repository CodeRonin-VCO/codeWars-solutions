import { describe, expect, test } from "@jest/globals";
import toCamelCase from "../../strings/convert-string-to-camel-case.js";

// Kata : Convert string to camel case — 6kyu
describe("Cas valides", () => {
    test("converts snake_case to camelCase", () => {
        expect(toCamelCase("the_stealth_warrior")).toBe("theStealthWarrior");
    });

    test("converts kebab-case with capitals to camelCase", () => {
        expect(toCamelCase("The-Stealth-Warrior")).toBe("TheStealthWarrior");
    });

    test("converts single-letter words", () => {
        expect(toCamelCase("A-B-C")).toBe("ABC");
    });
})

describe("Cas invalides", () => {
    test("null returns null", () => {
        expect(toCamelCase(null)).toBe(null);
    });

    test("undefined returns undefined", () => {
        expect(toCamelCase(undefined)).toBe(undefined);
    });
})

describe("Cas limites", () => {
    test("empty string returns empty string", () => {
        expect(toCamelCase("")).toBe("");
    });

    test("string without separator returns itself unchanged", () => {
        expect(toCamelCase("hello")).toBe("hello");
    });
})


