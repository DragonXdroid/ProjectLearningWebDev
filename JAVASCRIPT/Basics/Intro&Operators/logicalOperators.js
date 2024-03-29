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