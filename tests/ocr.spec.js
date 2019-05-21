import { entries } from "./test_data";
import { UNKNOWN_DIGIT as _ } from "../src/numbers";
import { parseEntry } from "../src/ocr";

describe(`parseEntry()`, () => {
    const { legibleValidEntry, illegibleEntry, legibleInvalidEntry } = entries;

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
        expect(numbers).toEqual([1, _, 3, 4, 5, 6, 7, 8, 9]);
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
