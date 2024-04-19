// Define the first array
const first = [4, 6, 7];

// Define the second array
const second = [9, 6, 9, 0];

// Combine the arrays using the concat method (Shallow copy, copies references not actual objects)
const combined = first.concat(second);

// Create a shallow copy of the combined array using slice (Shallow copy, copies references not actual objects)
const slice = combined.slice();

// Combine arrays using the spread operator 
const spreadCombined1 = [...first, ...second]; 
const spreadCombined2 = [...first, 2, ...second, '2']; 

// Create a shallow copy of the combined array using the spread operator
const spreadCopy = [...combined]; 

// Notes:
// - The spread operator (...) provides a concise and efficient way to combine and clone arrays.
// - When using the spread operator to combine arrays, it creates a new array with copies of the original array elements.
// - Using the spread operator is often considered the best practice for combining and cloning arrays due to its simplicity and flexability
