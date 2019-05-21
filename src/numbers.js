export const ENTRY_LENGTH = 9;
export const DIGIT_HEIGHT = 4;
export const DIGIT_WIDTH = 3;
export const LINE_LENGTH = ENTRY_LENGTH * DIGIT_WIDTH;
export const UNKNOWN_DIGIT = "?";

// ·_· ··· ·_· ·_· ··· ·_· ·_· ·_· ·_· ·_·
// |·| ··| ·_| ·_| |_| |_· |_· ··| |_| |_|
// |_| ··| |_· ·_| ··| ·_| |_| ··| |_| ·_|
// ··· ··· ··· ··· ··· ··· ··· ··· ··· ···

export const DIGITS = [
    // [0, [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0]],
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

export const BLANK_DIGIT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const NUMBER_LOOKUP = createNumberLookup();

const DIGITS_LOOKUP = createDigitLookup();

export function lookupNumber(number) {
    return NUMBER_LOOKUP.get(number);
}

export function lookupDigit(digit) {
    const numStr = serializeDigit(digit);
    const number = DIGITS_LOOKUP.get(numStr);
    if (number === undefined) {
        return UNKNOWN_DIGIT;
    }
    return number;
}

function createNumberLookup() {
    return new Map(DIGITS);
}

function createDigitLookup() {
    return new Map(
        DIGITS.map(([number, digit]) => [serializeDigit(digit), number])
    );
}

function serializeDigit(arr) {
    return JSON.stringify(arr);
}
