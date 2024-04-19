const numbers = [1,2,3,4,3]

function countOccurencesV2(array, searchElement){
    if (!Array.isArray(array)){
        throw new Error("must pass an array in 1st argument")
    }
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
 
}

try {
    console.log(countOccurencesV2(numbers, 3))
}
catch(e) {
    console.log(e.message);
}
