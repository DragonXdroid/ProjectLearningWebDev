const numbers = [1, 2, 3, 4 ];

function includes(array, searchElement) {
    return array.some(value => value === searchElement);
}

console.log(includes(numbers, 4)); // Output: true
