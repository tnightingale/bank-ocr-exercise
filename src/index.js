import { createLineReader, input1 } from "./input";
import { parseNextAccount } from "./ocr";
import { print, printLine, debug } from "./debug";
import { renderEntryForAccountNumber, renderOCRResult } from "./printer";

generateReport(createLineReader(input1));

function generateReport(file) {
    let result = parseNextAccount(file);
    while (result !== undefined) {
        let [accountNumber] = result;
        let resultOutput = renderOCRResult(result);
        debug(resultOutput);
        printLine("---------------------------");
        print(renderEntryForAccountNumber(accountNumber));
        printLine(`=> ${resultOutput}`);
        result = parseNextAccount(file);
    }
}
