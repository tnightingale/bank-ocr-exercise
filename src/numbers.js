export const ENTRY_LENGTH = 9;
export const DIGIT_HEIGHT = 4;
export const DIGIT_WIDTH = 3;
export const LINE_LENGTH = ENTRY_LENGTH * DIGIT_WIDTH;

// ·_· ··· ·_· ·_· ··· ·_· ·_· ·_· ·_· ·_·
// |·| ··| ·_| ·_| |_| |_· |_· ··| |_| |_|
// |_| ··| |_· ·_| ··| ·_| |_| ··| |_| ·_|
// ··· ··· ··· ··· ··· ··· ··· ··· ··· ···
export const NUMBERS = [
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
export const BLANK = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export const NUMBERS_TABLE = new Map(NUMBERS.map((arr, i) => [num(arr), i]));

export function lookupDigit(digit) {
    const numStr = num(digit);
    const number = NUMBERS_TABLE.get(numStr);
    if (number === 0 || number === undefined) {
        return "?";
    }
    return number;
}

function num(arr) {
    return JSON.stringify(arr);
}
