const numbers = [3, 5, 6, 8, 1]

sum = numbers.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue
}, 0) // here we can intillize the defualt value of the accumulator to 0
// if we dont provide an intillization it will become the first value of the array

console.log(sum)
