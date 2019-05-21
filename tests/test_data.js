import { UNKNOWN_DIGIT as _ } from "../src/numbers";

function createEntryFromString(str) {
    const lines = str.split("\n");
    const entry = lines.map(line => line.split(""));
    return entry;
}

const legibleValidEntry =
    "    _  _     _  _  _  _  _ \n" +
    "  | _| _||_||_ |_   ||_||_|\n" +
    "  ||_  _|  | _||_|  ||_| _|\n" +
    "                           \n";

const illegibleEntry =
    "    _  _     _  _  _  _  _ \n" +
    "  |  | _||_||_ |_   ||_||_|\n" +
    "  ||_  _|  | _||_|  ||_| _|\n" +
    "                           \n";

const legibleInvalidEntry =
    " _  _  _  _  _  _  _  _  _ \n" +
    " _| _| _| _| _| _| _| _| _|\n" +
    "|_ |_ |_ |_ |_ |_ |_ |_ |_ \n" +
    "                           \n";

export const entries = {
    legibleValidEntry: createEntryFromString(legibleValidEntry),
    illegibleEntry: createEntryFromString(illegibleEntry),
    legibleInvalidEntry: createEntryFromString(legibleInvalidEntry)
};

const validDigits = new Map([
    [1, [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0]],
    [2, [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]],
    [3, [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0]],
    [4, [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0]],
    [5, [0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0]],
    [6, [0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0]],
    [7, [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0]],
    [8, [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0]],
    [9, [0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0]]
]);
const invalidDigits = [
    [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

export const digits = {
    validDigits,
    invalidDigits
};

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

export const accountNumbers = {
    invalidAccountNumbers,
    validAccountNumbers,
    illegibleAccountNumbers,
    legibleAccountNumbers
};
