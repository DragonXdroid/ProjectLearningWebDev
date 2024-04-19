function arrayFromRange(min, max) { 
    let array = []
    for (let i = min; i <= max; i++){
        array.push(i);
    }
    return array;
}

let arr = arrayFromRange(1, 4);
console.log(arr);