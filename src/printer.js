import { debug } from "./debug";
import { DIGIT_HEIGHT, DIGITS, BLANK_DIGIT, UNKNOWN_DIGIT } from "./numbers";

const BLANK_GLYPH = " ";
const ERR = "X";
const GLYPH_PALETTE = [
    ...[ERR, "_", ERR],
    ...["|", "_", "|"],
    ...["|", "_", "|"],
    ...[ERR, " ", ERR]
];

export function renderEntryForAccountNumber(accountNumber) {
    const accountNumberStr = accountNumber.toString();
    const digits = [];
    for (let char of Array.from(accountNumberStr)) {
        let digit;
        if (char === UNKNOWN_DIGIT) {
            digit = BLANK_DIGIT;
        } else {
            const number = parseInt(char, 10);
            digit = DIGITS[number];
        }
        digits.push(digit);
    }
    return renderEntryFromDigits(digits);
}

export function renderEntryFromDigits(digits) {
    let out = "";
    out += renderLineForMultiple(digits, 0) + "\n";
    out += renderLineForMultiple(digits, 1) + "\n";
    out += renderLineForMultiple(digits, 2) + "\n";
    out += renderLineForMultiple(digits, 3) + "\n";
    return out;
}

export function renderSingleNumber(digit) {
    let out = "";
    out += renderLineForSingle(digit, 0) + "\n";
    out += renderLineForSingle(digit, 1) + "\n";
    out += renderLineForSingle(digit, 2) + "\n";
    out += renderLineForSingle(digit, 3) + "\n";
    return out;
}

export function renderOCRResult(result) {
    const [numbers, legible, valid] = result;
    const accountNumber = numbers.join("");
    let message;
    if (!legible) {
        message = "ILL";
    } else if (!valid) {
        message = "ERR";
    }
    if (message) {
        return `${accountNumber} ${message}`;
    } else {
        return `${accountNumber}`;
    }
}

function renderLineForMultiple(digits, lineNumber) {
    debug("renderDigitRowForMultiple()");
    debug(JSON.stringify(digits));
    let out = "";
    for (let i = 0; i < digits.length; i++) {
        debug(`(rowNum: ${lineNumber}) ${i}:`);
        debug(JSON.stringify(digits[i]));
        out += renderLineForSingle(digits[i], lineNumber);
    }
    return out;
}

function renderLineForSingle(digit, lineNumber) {
    const digitOffset = digit.length / DIGIT_HEIGHT;
    const rowOffset = digitOffset * lineNumber;
    const row = digit.slice(rowOffset, rowOffset + digitOffset);
    let out = "";
    for (let i = 0; i < row.length; i++) {
        out += getGlyph(digit, rowOffset + i);
    }
    debug(`printRow() ${lineNumber}:${rowOffset}: ${row} ${out}`);
    return out;
}

function getGlyph(digit, glyphOffset) {
    return digit[glyphOffset] ? GLYPH_PALETTE[glyphOffset] : BLANK_GLYPH;
}
