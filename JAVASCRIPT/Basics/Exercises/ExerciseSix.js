let array = [1, 'k', null, NaN, '2']

function countTruthy(array) {
    let count = 0;

    for (let key of array) {
        if (key) {
            count++;
        }
    }
    return count;
}

console.log(countTruthy(array))
