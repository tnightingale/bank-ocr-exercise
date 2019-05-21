import { lookupDigit } from "../src/numbers";

describe(`lookupDigit()`, () => {
    const validDigits = [
        [0, [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0]],
        [1, [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0]],
        [2, [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]],
        [3, [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0]],
        [4, [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0]],
        [5, [0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0]],
        [6, [0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0]],
        [7, [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0]],
        [8, [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0]],
        [9, [0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0]]
    ];

    const invalidDigits = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    it(`should return the correct number for a recognizable digit (between 0 & 9)`, () => {
        for (let [number, digit] of validDigits) {
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
