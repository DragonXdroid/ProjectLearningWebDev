const numbers = [1, 2, 3, -5];

// every()
// some()


const allPositive = numbers.every(value => {
    return value >= 0
})

console.log(allPositive)


const atLeastOnePositive = numbers.some(value => {
    return value >= 0
})

console.log(atLeastOnePositive)