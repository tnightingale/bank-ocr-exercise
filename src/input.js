export function* createLineReader(str) {
    let lines = str.split("\n");
    while (lines.length > 0) {
        let line = lines[0];
        // Ignore newline at end of file.
        if (line.length > 0) {
            yield line;
        }
        lines = lines.slice(1);
    }
}

export function readLine(lineReader) {
    const next = lineReader.next();
    const line = next.value;
    return line;
}

export const input1 =
    "    _  _     _  _  _  _  _ \n" +
    "  | _| _||_||_ |_   ||_||_|\n" +
    "  ||_  _|  | _||_|  ||_| _|\n" +
    "                           \n" +
    "    _  _     _  _  _  _  _ \n" +
    "  |  | _||_||_ |_   || ||_|\n" +
    "  ||_  _|  | _||_|  ||_| _|\n" +
    "                           \n" +
    " _  _  _  _  _  _  _  _    \n" +
    "| || || || || || || ||_   |\n" +
    "|_||_||_||_||_||_||_| _|  |\n" +
    "                           \n" +
    "    _  _  _  _  _  _     _ \n" +
    "|_||_|| || ||_   |  |  | _ \n" +
    "  | _||_||_||_|  |  |  | _|\n" +
    "                           \n" +
    "    _  _     _  _  _  _  _ \n" +
    "  | _| _||_| _ |_   ||_||_|\n" +
    "  ||_  _|  | _||_|  ||_| _ \n" +
    "                           \n" +
    " _     _  _     _  _  _  _ \n" +
    "|_|  | _| _||_||_ |_   ||_|\n" +
    " _|  ||_  _|  | _||_|  ||_|\n" +
    "                           \n" +
    " _  _     _  _     _  _  _ \n" +
    "|_||_|  | _| _||_||_ |_   |\n" +
    "|_| _|  ||_  _|  | _||_|  |\n" +
    "                           \n" +
    " _  _  _     _  _     _  _ \n" +
    "  ||_||_|  | _| _||_||_ |_ \n" +
    "  ||_| _|  ||_  _|  | _||_|\n" +
    "                           \n" +
    " _  _  _  _     _  _     _ \n" +
    "|_   ||_||_|  | _| _||_||_ \n" +
    "|_|  ||_| _|  ||_  _|  | _|\n" +
    "                           \n" +
    " _  _  _  _  _     _  _    \n" +
    "|_ |_   ||_||_|  | _| _||_|\n" +
    " _||_|  ||_| _|  ||_  _|  |\n" +
    "                           \n" +
    " _  _     _  _        _  _ \n" +
    "|_ |_ |_| _|  |  ||_||_||_ \n" +
    "|_||_|  | _|  |  |  | _| _|\n" +
    "                           \n" +
    "                           \n" +
    "  |  |  |  |  |  |  |  |  |\n" +
    "  |  |  |  |  |  |  |  |  |\n" +
    "                           \n" +
    " _  _  _  _  _  _  _  _  _ \n" +
    " _| _| _| _| _| _| _| _| _|\n" +
    "|_ |_ |_ |_ |_ |_ |_ |_ |_ \n" +
    "                           \n" +
    " _  _  _  _  _  _  _  _  _ \n" +
    " _| _| _| _| _| _| _| _| _|\n" +
    " _| _| _| _| _| _| _| _| _|\n" +
    "                           \n" +
    "                           \n" +
    "|_||_||_||_||_||_||_||_||_|\n" +
    "  |  |  |  |  |  |  |  |  |\n" +
    "                           \n" +
    " _  _  _  _  _  _  _  _  _ \n" +
    "|_ |_ |_ |_ |_ |_ |_ |_ |_ \n" +
    " _| _| _| _| _| _| _| _| _|\n" +
    "                           \n";
