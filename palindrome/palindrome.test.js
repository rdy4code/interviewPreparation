const palindrome = require("./palindrome")

test("Is string palindrome", () => {
    expect(palindrome("abba"))
    .toBe(true);
    }
)

test("Is string palindrome", () => {
    expect(palindrome("not a palindrome"))
    .toBe(false);
    }
)