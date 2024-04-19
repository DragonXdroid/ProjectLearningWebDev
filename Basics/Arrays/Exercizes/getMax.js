

function getMax(array){
    return array.reduce((accumulator, current ) => {
        if (current > accumulator){
            accumulator = current
        }
        return accumulator
    })
}
console.log(getMax([1,4000,6,9,1999]))


function getMaxV2(array){
    return array.reduce((accumulator, current ) => (accumulator > current) ? accumulator : current)
}
console.log(getMaxV2([1,4000,6,9,1999]))