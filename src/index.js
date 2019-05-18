import { createLineReader, input1 } from "./input";
import { parseNextAccount } from "./ocr";
import { print, printLine } from "./debug";
import { printAccountNumber } from "./printer";

const file = createLineReader(input1);
let result = parseNextAccount(file);
while (result !== undefined) {
    printLine("---------------------------");
    print(printAccountNumber(result[0].join("")));

    let output = getAccountResultOutput(result);
    printLine(output);
    console.log(output);

    result = parseNextAccount(file);
}

function getAccountResultOutput(result) {
    const [numbers, legible, valid] = result;
    const account = numbers.join("");

    let message;
    if (!legible) {
        message = "ILL";
    } else if (!valid) {
        message = "ERR";
    }
    if (message) {
        return `${account} ${message}`;
    } else {
        return `${account}`;
    }
}
