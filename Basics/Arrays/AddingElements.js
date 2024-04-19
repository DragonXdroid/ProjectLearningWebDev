// Define an array of numbers
const numbers = [3, 4];

// Adding elements to the end of the array using the push method
numbers.push(4, 6);
// Resulting array: [3, 4, 4, 6]
// The push method adds the specified elements to the end of the array and returns the new length of the array.

// Adding elements to the beginning of the array using the unshift method
numbers.unshift(1, 3);
// Resulting array: [1, 3, 3, 4, 4, 6]
// The unshift method adds the specified elements to the beginning of the array and returns the new length of the array.

// Adding elements to the middle of the array using the splice method
numbers.splice(2, 0, 'a', 'b');
// Resulting array: [1, 3, 'a', 'b', 3, 4, 4, 6]
// The splice method modifies the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// In this case, we're starting at index 2, removing 0 elements (hence not removing anything), and adding 'a' and 'b' at index 2.
