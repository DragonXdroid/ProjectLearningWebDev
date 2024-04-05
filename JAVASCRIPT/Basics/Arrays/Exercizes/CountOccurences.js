const numbers = [1,2,3,4,3]


function countOccurrences(array, elementToCount){
    let count;
    for (element of array){
        if (element === elementToCount){
            count++;
        }
    }
    return count;
}

// better way, the impeartive way

function countOccurencesV2(array, searchElement){

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
 
}

console.log(countOccurencesV2(numbers, 3))