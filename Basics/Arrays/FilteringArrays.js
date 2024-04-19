const numbers = [1,4,-40,32,4.5]

const filtered = numbers.filter(value => {
    return value >= 0
})

console.log(filtered)