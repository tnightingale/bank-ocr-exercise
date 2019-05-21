import { DIGITS, LINE_LENGTH, UNKNOWN_DIGIT } from "./numbers";

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

const ALTS_LOOKUP = createAlternativesLookup();
console.log(ALTS_LOOKUP);

function createAlternativesLookup() {
    return new Map(
        DIGITS.map(([number, digit]) => [number, getAlternatives(digit)])
    );
}

function getAlternatives(sourceDigit) {
    let alternatives = [];
    for (let [number, digit] of DIGITS) {
        if (isAlternative(sourceDigit, digit)) {
            alternatives.push(number);
        }
    }
    return alternatives;
}

function isAlternative(digit, alternative) {
    const diff = xorDigits(digit, alternative);
    // a xor b === 0 indicates equality.
    if (diff === 0) {
        return false;
    }
    // Solve for the exponent.
    const exponent = Math.log(diff) / Math.log(2);
    // If exponent is integer & less than the line length it indicates only one
    // bit needs to be flipped to go from our digit to the alternative we're
    // testing.
    return Number.isInteger(exponent) && exponent <= LINE_LENGTH;
}

function xorDigits(a, b) {
    const strA = a.join("");
    const strB = b.join("");
    const bA = parseInt(strA, 2);
    const bB = parseInt(strB, 2);
    const aXorB = bA ^ bB;
    return aXorB;
}
