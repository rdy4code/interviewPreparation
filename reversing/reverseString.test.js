const reverseString = require("./reversString");

test("string must be reversed", () => {
    expect(reverseString.reverseString("reversedText")).toBe("txeTdesrever");
}   

);
