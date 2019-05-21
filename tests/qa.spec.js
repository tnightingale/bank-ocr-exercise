import { UNKNOWN_DIGIT as _ } from "../src/numbers";
import { validateChecksum, isLegible } from "../src/qa";

const invalidAccountNumbers = [
    [6, 6, 4, 3, 7, 1, 4, 9, 5],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5, 5, 5, 5, 5]
];

const validAccountNumbers = [
    [7, 1, 1, 1, 1, 1, 1, 1, 1],
    [7, 7, 7, 7, 7, 7, 1, 7, 7],
    [2, 0, 0, 8, 0, 0, 0, 0, 0],
    [3, 3, 3, 3, 9, 3, 3, 3, 3],
    [8, 8, 8, 8, 8, 6, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 0]
];

const illegibleAccountNumbers = [
    [_, 6, 4, 3, 7, 1, 4, _, 5],
    [1, _, 1, 1, 1, 1, 1, 1, _],
    [2, 2, _, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, _, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, _, 4, 4, 4, 4],
    [5, 5, 5, 5, 5, _, 5, 5, 5]
];

const legibleAccountNumbers = [
    [7, 1, 1, 1, 1, 1, 1, 1, 1],
    [7, 7, 7, 7, 7, 7, 1, 7, 7],
    [2, 0, 0, 8, 0, 0, 0, 0, 0],
    [3, 3, 3, 3, 9, 3, 3, 3, 3],
    [8, 8, 8, 8, 8, 6, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 0]
];

describe(`validateChecksum()`, () => {
    it(`should return false for invalid account numbers`, () => {
        for (let accountNumber of invalidAccountNumbers) {
            let result = validateChecksum(accountNumber);
            expect(result).toBe(false);
        }
    });

    it(`should return true for valid account numbers`, () => {
        for (let accountNumber of validAccountNumbers) {
            const result = validateChecksum(accountNumber);
            expect(result).toBe(true);
        }
    });
});

describe(`isLegible()`, () => {
    it(`should return false for account numbers containing a '?'`, () => {
        for (let accountNumber of illegibleAccountNumbers) {
            let result = isLegible(accountNumber);
            expect(result).toBe(false);
        }
    });

    it(`should return true for account numbers that do not contain a '?'`, () => {
        for (let accountNumber of legibleAccountNumbers) {
            const result = isLegible(accountNumber);
            expect(result).toBe(true);
        }
    });
});
