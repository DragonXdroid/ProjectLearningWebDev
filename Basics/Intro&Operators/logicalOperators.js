// Falsy  (False Values)
// Here are all falsy values below:

//undefined
// undefined
// null 
// 0 
// false
// ''
// NaN (Not a Number)

// Anything that is not Falsy -> Truthy

let userColor= undefined;
let defaultColor = 'blue'
let currentColor = userColor || defaultColor

console.log(currentColor)

// ?? - Returns the right side operand when the left is null or undefined

console.log( 10 ?? 20);
console.log( null ?? 20);