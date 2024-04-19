const numbers = [1,2,3,4]

function except(array, excluded){
    const output = [];
    array.forEach(value => {
        if (!excluded.includes(value)){
            output.push(value);
        }
    })
    return output
}

console.log(except(numbers, [1, 2, 3, 4]))