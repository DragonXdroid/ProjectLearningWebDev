
function fizzBuzz (number) {

    if (typeof number !== 'number'){
        return NaN;
    }

    if (number % 3 == 0) {
        console.log('Fizz')
    }
    if (number % 5 == 0) {
        console.log('Buzz')
    }
    else {
        console.log(number)
    }
}

fizzBuzz(3)
fizzBuzz(6)