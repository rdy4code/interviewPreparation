/*  precondition:
    postcondion: return boolean value for palindrome check
*/

// logic
// lowercase input
// Check for alphanumeric characters only
// returm after an equality comparizon with ===

const palindrome = (str) => {
    const alphanumericOnly = str
    .toLowerCase()
    .match(/[a-z0-9]/g);

    return alphanumericOnly.join("") === alphanumericOnly.reverse().join("");
    // const reversed = str.split("").reverse().join(""); 
    // return str === reversed;

}

module.exports = palindrome;