
function sum() {
    let total = 0;
    
    // the arguments keyword is used to refer the arguments given
    for (let value of arguments){ 
        total += value;
    }
    return total;
}

console.log(sum(2,3,4,5,7,1)) // prints out 22

// A better version of what we did above by using the rest operator

function sum2(discount, ...args) {
    const total = args.reduce((a,b) => a + b);
    return total * (1 - discount)
}

console.log(sum2(0.1,2,3,4,5,7,1))

