// String primitive
const message = 'hi';

// String Object
const another = new String('hi');

// Getting the length of a string
console.log(message.length); // Output: 2

// Accessing characters by index
console.log(message[0]); // Output: 'h'

// Checking if a string starts with a specific substring
console.log(message.startsWith('hi')); // Output: true

// Other useful string methods:

// Checking if a string ends with a specific substring
console.log(message.endsWith('i')); // Output: true

// Finding the index of a specific substring within a string
console.log(message.indexOf('i')); // Output: 1

// Converting a string to uppercase
console.log(message.toUpperCase()); // Output: 'HI'

// Converting a string to lowercase
console.log(message.toLowerCase()); // Output: 'hi'

// Removing leading and trailing whitespace from a string
const stringWithWhitespace = '  hello world  ';
console.log(stringWithWhitespace.trim()); // Output: 'hello world'

// Splitting a string into an array of substrings based on a delimiter
const sentence = 'The quick brown fox';
console.log(sentence.split(' ')); // Output: ['The', 'quick', 'brown', 'fox']

// Replacing occurrences of a substring with another substring
const sentenceWithReplacement = sentence.replace('brown', 'red');
console.log(sentenceWithReplacement); // Output: 'The quick red fox'
