// ||= qssigns the right side value only if the left is a falsy value

let variable1 = 0;
variable1 ||= 10;
console.log(variable1) // prints 10

// &&= assigns the right side value only if the left is a truthy value

let variable2 = 20;
variable2 &&= 10;
console.log(variable2) // prints 20

// ??= assigns the right side value only if the left is null or undefined

let variable3 = null;
variable3 ??= 30;
console.log(variable3) // prints 30