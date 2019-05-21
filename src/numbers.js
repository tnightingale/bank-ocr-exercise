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
    [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
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

export const BLANK_DIGIT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export function lookupDigit(digit) {
    const numStr = serializeDigit(digit);
    const number = DIGITS_LOOKUP.get(numStr);
    if (number === 0 || number === undefined) {
        return UNKNOWN_DIGIT;
    }
    return number;
}

const DIGITS_LOOKUP = createDigitLookup(DIGITS);

function createDigitLookup(numbers) {
    return new Map(numbers.map((arr, i) => [serializeDigit(arr), i]));
}

function serializeDigit(arr) {
    return JSON.stringify(arr);
}
