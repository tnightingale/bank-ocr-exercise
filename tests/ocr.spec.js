import { UNKNOWN_DIGIT as _ } from "../src/numbers";
import { parseEntry } from "../src/ocr";

describe(`parseEntry()`, () => {
    const legibleValidEntry = {
        accountNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        entry: createEntryFromString(
            "    _  _     _  _  _  _  _ \n" +
                "  | _| _||_||_ |_   ||_||_|\n" +
                "  ||_  _|  | _||_|  ||_| _|\n" +
                "                           \n"
        )
    };

    const illegibleEntry = {
        accountNumber: [1, _, 3, 4, 5, 6, 7, 8, 9],
        entry: createEntryFromString(
            "    _  _     _  _  _  _  _ \n" +
                "  |  | _||_||_ |_   ||_||_|\n" +
                "  ||_  _|  | _||_|  ||_| _|\n" +
                "                           \n"
        )
    };

    const legibleInvalidEntry = {
        accountNumber: [2, 2, 2, 2, 2, 2, 2, 2, 2],
        entry: createEntryFromString(
            " _  _  _  _  _  _  _  _  _ \n" +
                " _| _| _| _| _| _| _| _| _|\n" +
                "|_ |_ |_ |_ |_ |_ |_ |_ |_ \n" +
                "                           \n"
        )
    };

    it(`should return a successful result for a legible, valid entry`, () => {
        const result = parseEntry(legibleValidEntry.entry);
        const [numbers, legible, valid] = result;
        expect(numbers).toEqual(legibleValidEntry.accountNumber);
        expect(legible).toBe(true);
        expect(valid).toBe(true);
    });

    it(`should return a illegible & invalid result for an illegible entry`, () => {
        const result = parseEntry(illegibleEntry.entry);
        const [numbers, legible, valid] = result;
        expect(numbers).toEqual(illegibleEntry.accountNumber);
        expect(legible).toBe(false);
        expect(valid).toBe(false);
    });

    it(`should return an invalid result for a legible, invalid entry`, () => {
        const result = parseEntry(legibleInvalidEntry.entry);
        const [numbers, legible, valid] = result;
        expect(numbers).toEqual(legibleInvalidEntry.accountNumber);
        expect(legible).toBe(true);
        expect(valid).toBe(false);
    });
});

function createEntryFromString(str) {
    const lines = str.split("\n");
    const entry = lines.map(line => line.split(""));
    return entry;
}
