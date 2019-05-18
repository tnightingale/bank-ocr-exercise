import { debug } from "./debug";
import { DIGIT_HEIGHT, NUMBERS, BLANK as BLANK_DIGIT } from "./numbers";

const PRINT_BLANK = " ";
const ERR = "X";
const PRINT_PALETTE = [
    ...[ERR, "_", ERR],
    ...["|", "_", "|"],
    ...["|", "_", "|"],
    ...[ERR, " ", ERR]
];

export function printAccountNumber(accountNumber) {
    const accountNumberStr = new String(accountNumber);
    const digits = [];
    for (let char of Array.from(accountNumberStr)) {
        let digit;
        if (char === "?") {
            digit = BLANK_DIGIT;
        } else {
            const number = parseInt(char, 10);
            digit = NUMBERS[number];
        }
        digits.push(digit);
    }
    return printAll(digits);
}

export function printAll(numArrs) {
    let out = "";
    out += printRowMulti(numArrs, 0) + "\n";
    out += printRowMulti(numArrs, 1) + "\n";
    out += printRowMulti(numArrs, 2) + "\n";
    out += printRowMulti(numArrs, 3) + "\n";
    return out;
}

function printRowMulti(numArrs, rowNum) {
    debug("printRowMulti()");
    debug(JSON.stringify(numArrs));
    let out = "";
    for (let i = 0; i < numArrs.length; i++) {
        debug(`(rowNum: ${rowNum}) ${i}:`);
        debug(JSON.stringify(numArrs[i]));
        out += printRow(numArrs[i], rowNum);
    }
    return out;
}

function printRow(numArr, rowNum) {
    const digitOffset = numArr.length / DIGIT_HEIGHT;
    const rowOffset = digitOffset * rowNum;
    const row = numArr.slice(rowOffset, rowOffset + digitOffset);
    let out = "";
    for (let i = 0; i < row.length; i++) {
        out += getPrintChar(numArr, rowOffset + i);
    }
    debug(`printRow() ${rowNum}:${rowOffset}: ${row} ${out}`);
    return out;
}

export function printSingle(numArr) {
    let out = "";
    out += printRow(numArr, 0) + "\n";
    out += printRow(numArr, 1) + "\n";
    out += printRow(numArr, 2) + "\n";
    out += printRow(numArr, 3) + "\n";
    return out;
}

function getPrintChar(numArr, offset) {
    return numArr[offset] ? PRINT_PALETTE[offset] : PRINT_BLANK;
}
