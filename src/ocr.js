import {
    ENTRY_LENGTH,
    LINE_LENGTH,
    DIGIT_HEIGHT,
    DIGIT_WIDTH,
    lookupDigit
} from "./numbers";
import { readLine } from "./input";

export function parseNextAccount(file) {
    let [entry, complete] = readEntryFromFile(file);
    if (complete) {
        return;
    }
    const entryResult = parseEntry(entry);
    return entryResult;
}

export function parseEntry(entry) {
    let accountNumber = [];
    for (let i = 0; i < ENTRY_LENGTH; i++) {
        let digit = readDigit(entry, i);
        let number = lookupDigit(digit);
        accountNumber.push(number);
    }
    const legible = isLegible(accountNumber);
    const valid = validateChecksum(accountNumber);
    return [accountNumber, legible, valid];
}

export function isLegible(accountNumber) {
    return accountNumber.find(char => char === "?") === undefined;
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

function readDigit(line, position) {
    let digit = [];
    for (let rowOffset = 0; rowOffset < line.length; rowOffset += LINE_LENGTH) {
        let positionOffset = rowOffset + position * DIGIT_WIDTH;
        let sliceLength = positionOffset + DIGIT_WIDTH;
        let row = line.slice(positionOffset, sliceLength);
        digit.push(...parseRow(row));
    }
    return digit;
}

function parseRow(row) {
    return map(row, char => (char === " " ? 0 : 1));
}

function map(iterable, mapFn) {
    return Array.prototype.map.call(iterable, mapFn);
}

function readEntryFromFile(file) {
    let entry = "";
    for (let i = 0; i < DIGIT_HEIGHT; i++) {
        let line = readLine(file);
        if (i === 0 && line === undefined) {
            return [line, true];
        }

        assertValidLine(line);

        entry += line;
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
