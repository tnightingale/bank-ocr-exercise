import { accountNumbers } from "./test_data";
import { validateChecksum, isLegible } from "../src/qa";

describe(`validateChecksum()`, () => {
    const { invalidAccountNumbers, validAccountNumbers } = accountNumbers;

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
    const { illegibleAccountNumbers, legibleAccountNumbers } = accountNumbers;

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
