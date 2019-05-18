import { lookupDigit } from "../src/numbers";

describe(`lookupNumber()`, () => {
    const validDigits = [
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
        [0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0]
    ];
    const invalidDigits = [
        [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    it(`should return the correct number for a recognizable digit (between 1 & 9)`, () => {
        for (let i = 0; i < validDigits.length; i++) {
            let digit = validDigits[i];
            let result = lookupDigit(digit);
            let number = i + 1;
            expect(result).toBe(number);
        }
    });

    it(`should return a '?' for a recognizable digit`, () => {
        for (let digit of invalidDigits) {
            let result = lookupDigit(digit);
            expect(result).toBe("?");
        }
    });
});
