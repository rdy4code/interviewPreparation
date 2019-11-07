const functions = require("./functions");

test("Add 2 + 2 NOT equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});