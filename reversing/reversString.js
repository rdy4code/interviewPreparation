/*
precondition: entry must be a string type
postcondition: return reversed string
*/


const reverseString = {
    reverseString: (testString) => {
        // Shortened version
        // let arr = testString.split("");
        // arr.reverse();
        // return arr.join("");

    //     return testString
    //          .split("")
    //         .reverse()
    //         .join("");

        //without using reverse()
    // let reversed = "";
    // for (let character of testString){
    //     reversed = character + reversed;
    // }
    // return reversed;
    // }
    testString.split("").reduce((reversed, charachter) => character + reversed,"");
}

module.exports = reverseString;