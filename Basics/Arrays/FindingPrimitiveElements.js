// Define an array of numbers
const numbers = [4, 6, 7, 2, 9, 2, 4];

// Finding the index of the first occurrence of a value in the array
numbers.indexOf(4); // returns 0
// The indexOf method returns the index of the first occurrence of the specified value in the array.
// Here, it returns 0 because the value 4 is first found at index 0 in the array.

// Finding the index of a value starting from a specified index
numbers.indexOf(4, 2); // returns 6
// The indexOf method can also take a second argument as the 'fromIndex' parameter, which specifies the index to start the search from.
// Here, it returns 6 because it starts searching from index 2, and the next occurrence of 4 is found at index 6.

// Checking if a value is present in the array
numbers.indexOf('k'); // returns -1
// If the value is not found in the array, indexOf returns -1.

// Finding the last index of a value in the array
numbers.lastIndexOf(2 !== -1); // returns true
// The lastIndexOf method returns the index of the last occurrence of the specified value in the array.
// Here, it returns true because the value 2 exists in the array.

// Checking if a value is included in the array
numbers.includes(1); // returns false
// The includes method returns true if the array contains the specified value, and false otherwise.
// It's a more concise and readable alternative to using indexOf to check for the presence of a value.
