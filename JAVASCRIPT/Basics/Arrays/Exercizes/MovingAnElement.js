

function move(array, index, offset){
    const position = index + offset;
    if (position >= array.length || position < 0){
        console.error('Invalid offset');
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
}

const output = move(numbers, 0, 4);