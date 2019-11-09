const reverseString = require("./reversString");

test("string must be reversed", () => {
    expect(reverseString.reverseString("1221")).toBe("1221");
}   

);
