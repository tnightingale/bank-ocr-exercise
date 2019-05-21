import { createLineReader, input1 } from "./input";
import { parseNextAccount } from "./ocr";
import { print, printLine } from "./debug";
import { renderEntryForAccountNumber, renderOCRResult } from "./printer";

generateReport(createLineReader(input1));

function generateReport(file) {
    let result = parseNextAccount(file);
    while (result !== undefined) {
        let [accountNumber] = result;
        let output = renderOCRResult(result);
        printLine("---------------------------");
        print(renderEntryForAccountNumber(accountNumber.join("")));
        printLine(output);
        console.log(output);
        result = parseNextAccount(file);
    }
}
