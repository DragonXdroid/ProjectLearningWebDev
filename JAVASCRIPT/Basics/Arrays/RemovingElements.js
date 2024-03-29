const numbers = [1,2,4,5]


// Remove an element from the end of the array and store it in a variable
const last = numbers.pop();
// The pop() method removes the last element from an array and returns that element.
// After this operation, the numbers array becomes [1, 2, 4].

// Remove an element from the beginning of the array and store it in a variable
const first = numbers.shift();
// The shift() method removes the first element from an array and returns that element.
// After this operation, the numbers array becomes [2, 4].

// remove from middle of an array
numbers.splice(1,1) // output is [2]

