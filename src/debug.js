const output = document.getElementById("output");
export function print(str) {
    output.textContent += str;
}

export function printLine(str) {
    output.textContent += str + "\n";
}

// const debugOutput = document.getElementById("debug");
export function debug(message) {
    // debugOutput.textContent += `${message}\n`;
}
