// bitwise operator OR
//          1 - 00000001
//          2 - 00000010
// result       00000011
// if one of the bits 1, result's is 1 
console.log(1 | 2); // --> 3

// bitwise AND
//          1 - 00000001
//          2 - 00000010
// result       00000000
//  if both bits are 1 then result bit will be 1
console.log(1 & 2); // --> 0

// What is logic behind ???
// If the user has permission for some actions
// for example Read , Write , Execute
// 00000100 -Read
// 00000010 - Write
// 00000001 - Execute
// 00000111  - All actions


