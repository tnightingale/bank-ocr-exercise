import { validateChecksum, isLegible, parseEntry } from "../src/ocr";

describe(`parseEntry()`, () => {
    const legibleValidEntry =
        "    _  _     _  _  _  _  _ " +
        "  | _| _||_||_ |_   ||_||_|" +
        "  ||_  _|  | _||_|  ||_| _|" +
        "                           ";
    const illegibleEntry =
        "    _  _     _  _  _  _  _ " +
        "  |  | _||_||_ |_   ||_||_|" +
        "  ||_  _|  | _||_|  ||_| _|" +
        "                           ";
    const legibleInvalidEntry =
        " _  _  _  _  _  _  _  _  _ " +
        " _| _| _| _| _| _| _| _| _|" +
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ " +
        "                           ";

    it(`should return a successful result for a legible, valid entry`, () => {
        const result = parseEntry(legibleValidEntry);
        const [numbers, legible, valid] = result;
        expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(legible).toBe(true);
        expect(valid).toBe(true);
    });

    it(`should return a illegible & invalid result for an illegible entry`, () => {
        const result = parseEntry(illegibleEntry);
        const [numbers, legible, valid] = result;
        expect(numbers).toEqual([1, "?", 3, 4, 5, 6, 7, 8, 9]);
        expect(legible).toBe(false);
        expect(valid).toBe(false);
    });

    it(`should return an invalid result for a legible, invalid entry`, () => {
        const result = parseEntry(legibleInvalidEntry);
        const [numbers, legible, valid] = result;
        expect(numbers).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2]);
        expect(legible).toBe(true);
        expect(valid).toBe(false);
    });
});

describe(`validateChecksum()`, () => {
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
    const illegibleAccountNumbers = [
        ["?", 6, 4, 3, 7, 1, 4, "?", 5],
        [1, "?", 1, 1, 1, 1, 1, 1, "?"],
        [2, 2, "?", 2, 2, 2, 2, 2, 2],
        [3, 3, 3, "?", 3, 3, 3, 3, 3],
        [4, 4, 4, 4, "?", 4, 4, 4, 4],
        [5, 5, 5, 5, 5, "?", 5, 5, 5]
    ];

    const legibleAccountNumbers = [
        [7, 1, 1, 1, 1, 1, 1, 1, 1],
        [7, 7, 7, 7, 7, 7, 1, 7, 7],
        [2, 0, 0, 8, 0, 0, 0, 0, 0],
        [3, 3, 3, 3, 9, 3, 3, 3, 3],
        [8, 8, 8, 8, 8, 6, 8, 8, 8],
        [8, 8, 8, 8, 8, 8, 8, 8, 0]
    ];

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
