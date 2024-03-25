// 1 = 00000001 - each a digit os a bit
// 2 = 00000010

// using or (|) check if either is is 1, if so makes the output in that place 1
// result 00000011 -> 3

// using or (&) check if either if either one is 0, if so makes the output in that place 0
// result 00000000 -> 0

console.log(1 | 2) // result = 3
console.log(1 & 2) // result = 3