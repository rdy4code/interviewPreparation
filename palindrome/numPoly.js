/*
precondition: positive integer
postcondition: return isPalindrome
*/

const palindrome = (num) => {
    const isInteger = Number.isInteger(num);
    if (isInteger & num > 0) {
      return String(num) === String(num).split("").reverse().join("");
    }
    return "Not valid";
}