import { digits } from "./test_data";
import { lookupDigit } from "../src/numbers";

describe(`lookupDigit()`, () => {
    const { validDigits, invalidDigits } = digits;

    it(`should return the correct number for a recognizable digit (between 1 & 9)`, () => {
        for (let [number, digit] of validDigits.entries()) {
            let result = lookupDigit(digit);
            expect(result).toBe(number);
        }
    });

    it(`should return a '?' for a unrecognizable digit`, () => {
        for (let digit of invalidDigits) {
            let result = lookupDigit(digit);
            expect(result).toBe("?");
        }
    });
});
