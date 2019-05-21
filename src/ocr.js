import {
    ENTRY_LENGTH,
    LINE_LENGTH,
    DIGIT_HEIGHT,
    DIGIT_WIDTH,
    lookupDigit
} from "./numbers";
import { readLine } from "./input";

const BLANK_GLYPH = " ";

export function parseNextAccount(file) {
    let [entryLines, complete] = readEntryFromFile(file);
    if (complete) {
        return;
    }
    const entryResult = parseEntry(entryLines);
    return entryResult;
}

export function parseEntry(entryLines) {
    let digits = [];
    for (let i = 0; i < ENTRY_LENGTH; i++) {
        let digit = readDigit(entryLines, i);
        digits.push(digit);
    }

    const accountNumber = digitsToAccountNumber(digits);
    const legible = isLegible(accountNumber);
    const valid = validateChecksum(accountNumber);

export function isLegible(accountNumber) {
    return accountNumber.find(char => char === UNKNOWN_DIGIT) === undefined;
}

export function validateChecksum(accountNumber) {
    let sum = 0;
    for (let i = 0; i < accountNumber.length; i++) {
        let d = accountNumber.length - i;
        let p = accountNumber[i];
        sum += p * d;
    }
    return sum % 11 === 0;
}

function digitsToAccountNumber(digits) {
    return digits.map(lookupDigit);
}

function readDigit(entryLines, position) {
    let digit = [];
    for (let lineNumber = 0; lineNumber < entryLines.length; lineNumber++) {
        let line = entryLines[lineNumber];
        let lineOffset = position * DIGIT_WIDTH;
        let row = line.slice(lineOffset, lineOffset + DIGIT_WIDTH);
        digit.push(...parseRowGlyphs(row));
    }
    return digit;
}

function parseRowGlyphs(row) {
    return map(row, char => (char === BLANK_GLYPH ? 0 : 1));
}

function map(iterable, mapFn) {
    return Array.prototype.map.call(iterable, mapFn);
}

function readEntryFromFile(file) {
    let entry = [];
    for (let i = 0; i < DIGIT_HEIGHT; i++) {
        let line = readLine(file);
        if (i === 0 && line === undefined) {
            return [line, true];
        }

        assertValidLine(line);

        entry.push(line);
    }
    return [entry, false];
}

function assertValidLine(line) {
    if (line === undefined) {
        throw new Error(`Unexpected end of line`);
    }
    if (line.length !== LINE_LENGTH) {
        throw new Error(
            `Malformed line:\n` +
                `\t${line}\n` +
                `\tExpected length ${LINE_LENGTH}, found length ${
                    line.length
                }\n`
        );
    }
}
