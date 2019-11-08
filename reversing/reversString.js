/*
precondition: entry must be a string type
postcondition: return reversed string
*/


const reverseString = {
    reverseString: (testString) => {
        // let arr = testString.split("");
        // arr.reverse();
        // return arr.join("");

        // Shortened version
    //     return testString
    //          .split("")
    //         .reverse()
    //         .join("");

    let reversed = "";

    for (let character of testString){
        reversed = character + reversed;

    }
    return reversed;

    }
}

module.exports = reverseString;