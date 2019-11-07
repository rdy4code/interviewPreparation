/*
precondition: entry must be a string type
postcondition: return reversed string
*/


const reverseString = {
    reverseString: (testString) => {
        // let arr = testString.split("");
        // arr.reverse();
        // return arr.join("");

        return testString.split("").reverse().join("");
    }
}

module.exports = reverseString;